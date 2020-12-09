// import os from "os";
const os = require("os");
const fs = require("fs");

console.log("Hello!!!");
console.log("I'm outside of the browser!");

const platform = os.platform();
const version = os.version();
const homeDirectory = os.homedir();

console.log(`You are running node on this platform: ${platform}.`);
console.log(`You are running node on this version: ${version}.`);
console.log(`Your home directory: ${homeDirectory}.`);

const message = fs.readFileSync("message.txt", { encoding: "utf8", flag: "r" });
console.log(`You've got a message:\n${message}`);

fs.writeFileSync("greeting.txt", "Hello World!");
