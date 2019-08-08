const ipc = require('electron').ipcRenderer;

function click(){
     ipc.on('click', (event, arg) => {

     });
     console.log('/////')
}