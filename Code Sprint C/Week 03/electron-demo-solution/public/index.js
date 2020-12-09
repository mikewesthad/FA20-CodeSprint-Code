const { node, chrome, electron } = process.versions;
const os = require("os");
const fs = require("fs");

const platform = os.platform();
const version = os.version();
const message = fs.readFileSync("public/message.txt", { encoding: "utf-8" });

document.body.innerHTML += `
  <h1>System Info</h1>
  <p>Node version: ${node}</p>
  <p>Chrome version: ${chrome}</p>
  <p>Electron version: ${electron}</p>
  <p>OS Platform: ${platform}</p>
  <p>OS Version: ${version}</p>
  <p>Message: ${message}</p>
`;

const notification = new Notification("Welcome Message", {
  body: "Hey! Look at me.",
});
