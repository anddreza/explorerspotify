import { test, expect } from '@playwright/test';

test('should play a song', async ({ page }) => {

  const song = {
    title: 'Bughium'
  }
  await page.goto('/');

  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito')

  const songCard = page.locator('.song').filter({hasText: song.title})
  const play = songCard.locator('.play')
  const pause = songCard.locator('.pause')
  await play.click()
  
  await expect(pause).toBeVisible({timeout: 2000})

 // await page.click('//div[contains(@class,"song")]//h6[text()="Bughium"]/..//button')
 // await page.waitForTimeout(5000)
});
