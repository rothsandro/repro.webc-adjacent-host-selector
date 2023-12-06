import { WebC } from "@11ty/webc";

const page = new WebC();
page.defineComponents(["demo.webc"]);
page.setBundlerMode(true);
page.setInputPath("page.webc");

const { css } = await page.compile();

console.log("CSS Output:");
console.log(css);
