const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
options.addArguments('--headless');

async function getInnerHTMLById(driver, id) {
    await driver.wait(until.elementLocated(By.id(id)), 10000);
    const element = await driver.findElement(By.id(id));
    let questionLink = await element.findElement(By.className('question-hyperlink'));
    return await questionLink.getAttribute("innerHTML");
  }
  
  (async function example() {
    let driver = await new Builder().forBrowser('chrome')
    .setChromeOptions(options)
    .build();
    try {
      await driver.get('https://stackoverflow.com/questions/428085');
      const content = await getInnerHTMLById(driver, "question-header");

      console.log(content);
    } finally {
      await driver.quit();
    }
  })();
    
