import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  const stats = await kv.get('frontendmentor');

  return NextResponse.json({ stats });
}
