import { getBrowserState, setupBrowserHooks } from './utils';

describe('App test', function () {
  setupBrowserHooks();
  it('is running', async function () {
    const { page } = getBrowserState();
    const element = await page.locator('app-list-teasers').wait();

    expect(element).not.toBeNull();
  });
});
