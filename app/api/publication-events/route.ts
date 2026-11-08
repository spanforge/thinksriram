import { NextRequest } from 'next/server';
const events = new Set(['article_view', 'subscribe_click', 'substack_click']);
export async function POST(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_PUBLICATION_ANALYTICS !== 'true') return new Response(null, { status: 204 });
  if (request.headers.get('origin') !== request.nextUrl.origin) return new Response(null, { status: 403 });
  const text = await request.text();
  if (text.length > 512) return new Response(null, { status: 400 });
  try {
    const { event, path } = JSON.parse(text);
    if (!events.has(event) || typeof path !== 'string' || path.length > 200 || !/^\/[a-z0-9/-]*$/.test(path)) return new Response(null, { status: 400 });
    console.info(JSON.stringify({ type: 'publication_metric', event, path }));
    return new Response(null, { status: 204 });
  } catch { return new Response(null, { status: 400 }); }
}
