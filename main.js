const path = require('path');
const url = require('url');
const electron = require('electron');
const config = require('./config/window');
const { ipcMain } = electron;
const {app, BrowserWindow} = electron;

let win;

function createWindow(){
     const screen = electron.screen.getPrimaryDisplay().workAreaSize;
     win = new BrowserWindow({
          width: screen.width,
          height: screen.height,
          webPreferences: {
               nodeIntegration: true
           }
     });

     win.loadURL(url.format(config.urlFormat));

     win.webContents.openDevTools();

     ipcMain.on('click', () => {
          console.log('jopa');
     });

     win.on('closed', () => {
          win = null;
     });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
     app.quit();
});