import { NextResponse } from 'next/server';
import { isStudioHost, publishEssay, saveEssay, StudioError, validateEssay } from '@/lib/studio';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const host = request.headers.get('host');
  if (!isStudioHost(host)) return new Response(null, { status: 404 });
  const origin = request.headers.get('origin');
  if ((origin !== `http://${host}` && origin !== `https://${host}`) ||
      !request.headers.get('content-type')?.startsWith('application/json')) {
    return new Response(null, { status: 403 });
  }
  try {
    const text = await request.text();
    if (text.length > 1_300_000) throw new StudioError('This draft is too large.');
    const payload: unknown = JSON.parse(text);
    if (!payload || typeof payload !== 'object') throw new StudioError('Invalid request.');
    const { action, essay } = payload as Record<string, unknown>;
    if (action !== 'save' && action !== 'publish') throw new StudioError('Unknown action.');
    const input = validateEssay(essay);
    const result = action === 'save' ? await saveEssay(input) : await publishEssay(input);
    return NextResponse.json(result, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    if (error instanceof StudioError || error instanceof SyntaxError) {
      return NextResponse.json({ error: error instanceof StudioError ? error.message : 'Invalid request.' }, { status: 400 });
    }
    console.error('Studio could not write the essay', error);
    return NextResponse.json({ error: 'Could not write to the workspace. Try again.' }, { status: 500 });
  }
}
