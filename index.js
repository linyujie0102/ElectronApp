const electron = require('electron');

const { app, BrowserWindow } = electron; //overall electron running electron app process.

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
})
