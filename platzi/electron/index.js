const {app, BrowserWindow} = require('electron');

app.on('before-quit',()=>{
  console.log('saliendo')
})

app.on('ready',()=>{
  let win = new BrowserWindow({
    width: 300,
    height:300,
    title:'test'
  })
  win.loadURL('http://www.gpstrackerls.com/plataforma-a.html')

  win.on('closed', function () {
    win = null
  })
  win.on('move',()=>{
    console.log('no me muevas!')
  })
})
