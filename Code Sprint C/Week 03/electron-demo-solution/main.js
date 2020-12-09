// This is our node script that starts up the electron app.

const { app, BrowserWindow } = require("electron");

function createWindow() {
  // https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    // fullscreen: true,
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("./public/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
