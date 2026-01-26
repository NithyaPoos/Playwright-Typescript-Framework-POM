import {Page,Locator} from '@playwright/test';
import {BasePage as bp} from './BasePage.ts';
import { verifyLocatorVisibility } from '../../Utilities/wait.ts';

export class LoginPage extends bp{
//vars
readonly username:Locator;
readonly password:Locator;
readonly loginButton:Locator;



constructor(page:Page){
super(page);
this.username=page.getByPlaceholder('Username');
this.password=page.getByPlaceholder('Password');
this.loginButton=page.getByRole('button', { name: 'Login' });
}

async enterUsername(username:string){
  await verifyLocatorVisibility(this.username);
  await this.username.fill(username);
}
async enterPassword(password:string){
  await verifyLocatorVisibility(this.password); 
  await this.password.fill(password);
}

async clickLogin(){
await verifyLocatorVisibility(this.loginButton);    
await this.loginButton.click();
}

async login(username:string,password:string){
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
}
}