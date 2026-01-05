const fs = require("fs");

const Themes = {};
fs.readdirSync("./community").forEach((file) => {
  if (file.endsWith(".json")) {
    const theme = JSON.parse(fs.readFileSync(`./community/${file}`));
    Themes[theme.name] = theme;
  }
});

fs.writeFileSync("./themes.json", JSON.stringify(Themes));
