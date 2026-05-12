import { test, expect, Page } from '@playwright/test';

/**
 * E2E tests confirming that Visual Editor CP hover/click styles are NOT applied
 * when no Live Preview iframe is open.
 *
 * Before the fix, `data-sve-hover` and `data-sve-active` were stamped on CP
 * elements even on pages that have no live preview (e.g. /cp/sites), making
 * the dashed outlines appear for every user interaction.
 */

const ENTRY_URL = '/cp/collections/pages/entries/home';
const SITES_URL = '/cp/sites';

// Visual IDs from content snapshot.
const ARTICLE_1_UID = 'c637b0b2-8208-460c-9a3a-cffdf8376c8c';

test.describe('No live preview open — CP hover/click guards', () => {
  // -------------------------------------------------------------------------
  // On a CP page that never has a Live Preview iframe (e.g. /cp/sites)
  // -------------------------------------------------------------------------

  test('hovering CP elements on a non-entry page does not apply data-sve-hover', async ({
    page,
  }) => {
    await page.goto(SITES_URL);

    // Simulate a mouseover on the page body — if the guard is missing, the
    // handler would try to run regardless of iframe presence.
    await page.evaluate(() => {
      document.body.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true }));
    });

    // No element anywhere in the CP should carry data-sve-hover.
    const hovered = await page.locator('[data-sve-hover]').count();
    expect(hovered).toBe(0);
  });

  test('clicking CP elements on a non-entry page does not apply data-sve-active', async ({
    page,
  }) => {
    await page.goto(SITES_URL);

    await page.evaluate(() => {
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    });

    const active = await page.locator('[data-sve-active]').count();
    expect(active).toBe(0);
  });

  // -------------------------------------------------------------------------
  // On the entry edit page — before Live Preview is opened
  // -------------------------------------------------------------------------

  test('hovering a replicator set before live preview is open does not apply data-sve-hover', async ({
    page,
  }) => {
    await page.goto(ENTRY_URL);

    // Wait for the CP to mount the Replicator sets before interacting.
    await page.locator('[data-replicator-set]').first().waitFor({ state: 'attached' });

    // Simulate a mouseover on the first replicator set.
    await page.evaluate(() => {
      const set = document.querySelector('[data-replicator-set]');
      if (set) {
        set.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true }));
      }
    });

    const hovered = await page.locator('[data-sve-hover]').count();
    expect(hovered).toBe(0);
  });

  test('clicking a replicator set before live preview is open does not apply data-sve-active', async ({
    page,
  }) => {
    await page.goto(ENTRY_URL);

    await page.locator('[data-replicator-set]').first().waitFor({ state: 'attached' });

    await page.evaluate(() => {
      const set = document.querySelector('[data-replicator-set]');
      if (set) {
        set.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      }
    });

    const active = await page.locator('[data-sve-active]').count();
    expect(active).toBe(0);
  });
});
