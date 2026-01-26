import {Page,Locator} from '@playwright/test';
import {verifyLocatorVisibility} from '../../Utilities/wait.ts'; 

export class BasePage{
 readonly page:Page;

    constructor(page:Page){
     this.page=page;
    }

    async  navigateToUrl(url:string)
    {
        try
        {
        await this.page.goto(url);
        console.log(`naviagted to the url successfully ${url}`);
        } 
        catch(error)
        {
         console.error(`Failed to navigate to the url ${url} :: ${error}`);
       }
   }

   async verifyTitle(){
    return await this.page.title();
   }

   async verifyUrl()
   {
    return  this.page.url();
   }

   
}