import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export default async function Icon() {
  const image = await readFile(path.join(process.cwd(), 'public/images/think-sriram-better-futures.png'));
  return new ImageResponse(<div style={{ width: 180, height: 180, display: 'flex', position: 'relative', overflow: 'hidden', background: '#f6f2e9' }}><img alt="" src={'data:image/png;base64,' + image.toString('base64')} width={410} height={410} style={{ position: 'absolute', left: -112, top: -36 }} /></div>, size);
}
