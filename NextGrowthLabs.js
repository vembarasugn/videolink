Feature('"NextGrowthLabs"');
Before(() => {

    });
Scenario(("NextGrowthLabs"), async ({ I }) => {
  I.resizeWindow(861, 619)
  I.amOnPage("http://nextgrowthlabs.s3-website.ap-south-1.amazonaws.com/#")
  I.click("div.container-wrapper")
  I.click("div.price-free-plan a")
  I.click("#first-name")
  I.click("#first-name")
  I.fillField("#first-name", "Vembarasan");
  I.click("#last-name")
  I.fillField("#last-name", "Nagarajan");
  I.click("#email-address")
  I.fillField("#email-address", "vembarasugn@");
  I.fillField("#email-address", "vembarasugn@gmail.com");
  I.click("#order-comments")
  I.fillField("#order-comments", "Comments order .");
  I.click("#Check1")
  I.click("#Check2")
  I.click("#Check1")
  I.click("button.btn")
  });
