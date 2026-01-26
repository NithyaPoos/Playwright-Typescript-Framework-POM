import {Locator,expect} from '@playwright/test';

// export async function waitFor(locator:Locator){
// await expect(locator).toBeVisible();
// }

 export async function verifyLocatorVisibility(locator:Locator) {
    await expect(locator).toBeVisible();
    //await expect(locator).toBeEnabled();
 
  }

