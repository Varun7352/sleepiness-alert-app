const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  showAlert: () => ipcRenderer.send('show-alert')
});
