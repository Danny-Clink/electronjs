const path = require('path');
const url = require('url');
const electron = require('electron');
const config = require('./config/window');
const { ipcMain } = electron;
const { app, BrowserWindow, Menu } = electron;
const needle = require('needle');
const URL = require('URL');

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

     console.log(URL.parse('https://ebanoe.it/2019/10/25/', true, true))
     needle.get('https://ebanoe.it/2019/10/25/', function (err, res) {
          if (err) throw err;
          console.log(res.body[7261]);
          console.log(res.body.search('Исповедь'))
          console.log(res.statusCode);
      });

     ipcMain.on('render', (event, arg) => {
          console.log(arg)
          event.returnValue = 'Prinyal'
     });

     win.on('closed', () => {
          win = null;
     });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
     app.quit();
});