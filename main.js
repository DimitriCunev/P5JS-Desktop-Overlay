const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Создаем окно браузера.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    transparent:true,
    frame:false,
    fullscreen:true,
    focusable:false
  })
  win.setIgnoreMouseEvents(true)
  // и загрузить index.html приложения.
  win.loadFile('index.html')

}

app.whenReady().then(createWindow)