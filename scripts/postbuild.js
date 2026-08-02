import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");
const assetsDir = path.resolve(".output/public/assets");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let scriptTag = "";
let styleTag = "";

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const mainJs = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const mainCss = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

  if (mainJs) {
    scriptTag = `<script type="module" src="/assets/${mainJs}"></script>`;
  }
  if (mainCss) {
    styleTag = `<link rel="stylesheet" href="/assets/${mainCss}" />`;
  }
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kd.inc — ingeniously disruptive</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
    ${styleTag}
  </head>
  <body>
    <div id="root"></div>
    ${scriptTag}
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent, "utf-8");
console.log("Successfully generated .output/public/index.html");
