import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { chromium } from 'playwright';

export async function GET() {
  try {
    const browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox'],
    });

    const storageState = JSON.parse(process.env.AUTH_JSON || '{}');

    const context = await browser.newContext({ storageState });
    const page = await context.newPage();

    await page.goto('https://www.frontendmentor.io/home', {
      waitUntil: 'load',
      timeout: 20000,
    });

    //? Verify if it's logged or not
    const loggedOutText = page.locator('h1');

    if ((await loggedOutText.innerText()) === 'Oops! You’re not logged in') {
      return NextResponse.json({ ok: false, message: 'Not logged in' });
    }

    const liMentorScore = page.locator('li:has-text("Mentor Score")');
    const liComments = page.locator('li:has-text("Comments")');

    const mentorScore = await liMentorScore.locator('span').nth(1).innerText();
    const comments = await liComments.locator('span').nth(1).innerText();

    const liHelpfulComments = page.locator('li:has-text("Helpful comments")');
    const helpfulComments = await liHelpfulComments
      .locator('span')
      .nth(1)
      .innerText();

    await page.goto('https://www.frontendmentor.io/wall-of-fame?tab=all');
    await page.waitForSelector('text=Bernardopog');

    const rankList = await page
      .locator('main > div:nth-of-type(2) div ul li')
      .all();

    let position = -1;
    for (let i = 0; i < rankList.length; i++) {
      const text = await rankList[i].innerText();
      if (
        text.toLowerCase().includes('bernardopog') ||
        text.toLowerCase().includes('bernardo poggioni')
      ) {
        position = i + 1;
        break;
      }
    }

    const convertedValues = (value: string) => parseInt(value, 10);

    await kv.set('frontendmentor', {
      mentorScore: convertedValues(
        mentorScore.replaceAll(',', '').replaceAll('.', ''),
      ),
      comments: convertedValues(comments),
      helpfulComments: convertedValues(helpfulComments),
      wallOfFame: position,
    });

    await browser.close();

    return NextResponse.json({
      ok: true,
      message: 'Data updated successfully',
    });
  } catch {
    return NextResponse.json({ ok: false, message: 'Unexpected error' });
  }
}
