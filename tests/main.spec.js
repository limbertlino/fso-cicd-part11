const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Xbox.'
      )
    ).toBeVisible()
  })
  test('can navigate to ivysaur page and see chlorophyll ability', async ({
    page,
  }) => {
    await page.goto('http://localhost:8080/')
    await page.click('text=ivysaur')
    await expect(page).toHaveURL('http://localhost:8080/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})

describe('Pokedex', () => {})
