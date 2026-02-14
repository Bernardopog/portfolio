import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    if (process.env.NODE_ENV === 'production') {
      const authHeader = req.headers.get('authorization');

      if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        const phrases = [
          'Someone is trying to exploit the Matrix. 😨',
          "Don't need to try bro, go chill 😎",
          'Thank you good sir, for trying to update my stats, but this is not necessary, bye. 😊',
          "Sorry, but you can't update it, LOL 🤣",
          'Oh... Hi 😀🖐',
        ];

        const phrase = phrases[Math.floor(Math.random() * phrases.length)];

        return new Response(phrase, {
          status: 401,
        });
      }
    }

    const headers = new Headers();
    if (process.env.SESSION_TOKEN) {
      headers.set('Cookie', process.env.SESSION_TOKEN);
    }

    const [resHome, resWallOfFame] = await Promise.all([
      fetch('https://www.frontendmentor.io/api/v3/learner/profile', {
        headers,
        cache: 'no-store',
      }),
      fetch('https://www.frontendmentor.io/api/v3/wall-of-fame/total', {
        headers,
        cache: 'no-store',
      }),
    ]);

    if (!resHome.ok || !resWallOfFame.ok)
      throw new Error('Error getting data from FEM.');

    const homeFull: {
      data: {
        commentCount: number;
        helpfulCount: number;
        mentorScore: { total: number };
      };
    } = await resHome.json();
    const { commentCount, helpfulCount, mentorScore } = homeFull.data;

    const wallOfFameFull: { data: { displayName: string }[] } =
      await resWallOfFame.json();

    const position = wallOfFameFull.data.findIndex(
      (item) => item.displayName === 'Bernardo Poggioni',
    );

    await kv.set('frontendmentor', {
      mentorScore: mentorScore.total,
      comments: commentCount,
      helpfulComments: helpfulCount,
      wallOfFame: position + 1,
    });

    return NextResponse.json(
      {
        ok: true,
        message: 'Data updated successfully',
      },
      { status: 200 },
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';

    return NextResponse.json(
      { ok: false, message: errorMessage },
      { status: 500 },
    );
  }
}
