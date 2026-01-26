import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { verifyLocatorVisibility } from '../../Utilities/wait';


export class DashboardPage extends BasePage {
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Dashboard' });
  }

  async verifyDashboard() {
    // await expect(this.heading).toBeVisible();
    await verifyLocatorVisibility(this.heading);
    await expect(this.page).toHaveURL(/dashboard/);
  }
}
