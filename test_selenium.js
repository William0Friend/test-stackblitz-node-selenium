//Eight Selenium Components

const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

(async function firstScript() {
  try {
    // 1 - Start the session
    //https://www.selenium.dev/documentation/webdriver/getting_started/open_browser/
    let driver = await new Builder().forBrowser('chrome').build();

    // 2 - Take action on browser
    //https://www.selenium.dev/documentation/webdriver/browser/navigation/
    await driver.get('https://www.google.com');

    // 3 - Request browser information
    // https://www.selenium.dev/documentation/webdriver/browser/
    await driver.getTitle();

    // 4 - Establish Waiting Strategy
    // https://www.selenium.dev/documentation/webdriver/waits/
    await driver.manage().setTimeouts({ implicit: 1000 });

    // 5. Find an element
    // https://www.selenium.dev/documentation/webdriver/elements/
    let searchBox = await driver.findElement(By.name('q'));
    let searchButton = await driver.findElement(By.name('btnK'));

    // 6. Take action on element
    // https://www.selenium.dev/documentation/webdriver/getting_started/first_script/
    await searchBox.sendKeys('Selenium');
    await searchButton.click();

    // 7. Request element information
    // https://www.selenium.dev/documentation/webdriver/elements/information/
    let value = await searchBox.getAttribute('value');
    assert.deepStrictEqual(value, 'Selenium');

    // 8 - End the session
    await driver.quit();
  } catch (error) {
    console.log(error);
  }
})();
