// import puppeteer from "puppeteer-extra";
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
const puppeteer = require('puppeteer')
// const room = "gws-huqm-dji"
module.exports = function LogInMeet(room, finishTime, email, password){

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-notifications", "--mute-audio", "--enable-automation"],
        ignoreDefaultArgs: true
    });

    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(1000000)


    const navigationPromise = page.waitForNavigation();
    await page.goto("https://accounts.google.com/");

    const context = browser.defaultBrowserContext();
    await context.overridePermissions(
        "https://meet.google.com/", ["microphone", "camera", "notifications"]
    );

    await navigationPromise;

    await page.waitForSelector('input[type="email"]');
    await page.click('input[type="email"]');
    await navigationPromise;
    await page.keyboard.type(email, { delay: 10 });
    await page.keyboard.press('Enter');

    await page.waitForTimeout(2000);

    await page.waitForTimeout(3500);
    await page.keyboard.type(password, { delay: 10 });  // replace YYYYY with your original password
    await page.waitForTimeout(800);
    await page.keyboard.press('Enter');
    await navigationPromise;

    await page.waitForTimeout(2500);
    await page.goto(`https://meet.google.com/${room}`);
    const url = page.url()
    if(url==="https://apps.google.com/meet/"){
    await page.goto("https://meet.google.com/");

    }

    await navigationPromise;


    await page.waitForTimeout(5000);

    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyE');
    await page.waitForTimeout(1000);

    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(1000);

    await page.waitForTimeout(1000);
    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyD');
    await page.waitForTimeout(1000);

    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(1000);
    await page.click('div[jsname="Qx7uuf"')

    await navigationPromise;
    var time = ''
    console.log('start finish process')
    do{
        let date_ob = new Date();
        let hours = date_ob.getHours()>=10 ? date_ob.getHours() : `0${date_ob.getHours()}`
        let minutes = date_ob.getMinutes()>=10 ? date_ob.getMinutes() : `0${date_ob.getMinutes()}`
        
         time = `${hours}:${minutes}`
        console.log(time)

    await page.waitForTimeout(60000);
    }while(time!==finishTime)
    browser.close()
 

})();
}