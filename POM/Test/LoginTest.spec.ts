import {test,expect} from '@playwright/test';
// import {LoginPage,DashboardPage} from './Page';

//import {BasePage} from '../Page/BasePage.ts';
import {LoginPage,DashboardPage} from '../Page/index.ts';
// import {LoginPage} from '../Page/LoginPage.ts';
// import {DashboardPage} from '../Page/DashBoardPage.ts';
import {user} from '../../TestData/loginData.ts';
//import { string } from 'zod';

test('login test with valid username and password',async({page})=>{

    const login=new LoginPage(page);
    const dashboard=new DashboardPage(page);
    //const base=new BasePage(page);
    //test data 
    const url:string='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    // const username:string='Admin';
    // const password:string='admin123';
    const expectedTitle=user.loginPageData.title;
   

    await login.navigateToUrl(url);
    await login.enterUsername(user.loginPageData.username);
    await login.enterPassword(user.loginPageData.password);
    await login.clickLogin();

     const actualTitle=await login.verifyTitle();
     expect(actualTitle).toContain(expectedTitle);
     await dashboard.verifyDashboard();

})
