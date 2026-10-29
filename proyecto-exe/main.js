const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{const w=new BrowserWindow({width:480,height:860,title:'FincaMax',icon:__dirname+'/build/icon.png',autoHideMenuBar:true});w.loadFile('index.html')});
app.on('window-all-closed',()=>app.quit());
