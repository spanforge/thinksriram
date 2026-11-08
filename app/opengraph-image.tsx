import { ImageResponse } from 'next/og';
export const alt = 'Think Sriram — Better Careers, Brighter Futures.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', background: '#f6f2e9', color: '#10243a', padding: 72, borderBottom: '12px solid #e4b74a' }}><div style={{ fontSize: 25, letterSpacing: 5 }}>THINK SRIRAM · AN INDEPENDENT PUBLICATION</div><div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'serif', fontSize: 78, lineHeight: 1.12 }}><span>Better Careers,</span><span>Brighter Futures.</span></div><div style={{ fontSize: 26 }}>Careers · Technology · Lifelong Learning · Better Decisions</div><div style={{ fontSize: 23 }}>thinksriram.com</div></div>, size);
}
