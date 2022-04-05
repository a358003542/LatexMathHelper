const { ipcRenderer,contextBridge, shell} = require('electron')


contextBridge.exposeInMainWorld(
    'electron',
    {
        openExternal: (link) => shell.openExternal(link)
    }
  )


