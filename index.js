const { app, BrowserWindow } = require('electron');
// const path = require('path');

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })

//   win.loadFile('index.html')
// }
// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })

const { init } = require('@dimensional-innovations/electron-background');
const path = require('node:path');

init({
  appUrl: `file://${path.resolve('./index.html')}`,
  browserWindowOptions: {
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  },
  plugins: [
    {
      beforeLoad(context) {
        context.browserWindow.on('ready-to-show', () => context.browserWindow.webContents.openDevTools({ mode: 'detach'}));
      }
    }
  ]
})

