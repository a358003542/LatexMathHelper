// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, Menu, clipboard } = require('electron')
// stop your app launching multiple times during installation
if (require('electron-squirrel-startup')) app.quit();

const path = require('path')
const { DEBUG } = require('./latexMathHelper/const')
const {menu_template} = require('./latexMathHelper/menu')



function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  if (DEBUG) {
    mainWindow.maximize()
    // 打开开发工具
    mainWindow.webContents.openDevTools()
  }

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  return mainWindow
}



// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  const browserWindow = createWindow()
  const webContents = browserWindow.webContents

  // set global variable useful for all next step
  globalThis.browserWindow = browserWindow
  globalThis.webContents = webContents

  // set mainmenu
  //const menu = Menu.buildFromTemplate(menu_template)
  //Menu.setApplicationMenu(menu)

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  // 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
  // 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

  // set context menu
  //webContents.on('context-menu', handleContextMenu)
})

// function hasText(params) {
//   return Boolean(params.selectionText.trim().length > 0)
// }
// function IsMenuTemplateVisable(menuTemplate) {
//   let count = 0
//   for (let item of menuTemplate) {
//     if (item.visible) {
//       count++
//     }
//   }
//   if (count > 0) {
//     return true
//   } else {
//     return false
//   }
// }
// function handleContextMenu(event, params) {
//   const browserWindow = globalThis.browserWindow
//   const webContents = globalThis.webContents

//   const defaultActions = {
//     separator: { type: 'separator' },
//     cut: {
//       id: 'cut',
//       label: 'Cu&t',
//       visible: params.isEditable,
//       click(menuItem) {
//         if (!menuItem.transform && webContents) {
//           webContents.cut();
//         } else {
//           params.selectionText = menuItem.transform ? menuItem.transform(params.selectionText) : params.selectionText;
//           clipboard.writeText(params.selectionText);
//         }
//       }
//     },
//     copy: {
//       id: 'copy',
//       label: '&Copy',
//       visible: params.isEditable || hasText(params),
//       click(menuItem) {
//         if (!menuItem.transform && webContents) {
//           webContents.copy();
//         } else {
//           params.selectionText = menuItem.transform ? menuItem.transform(params.selectionText) : params.selectionText;
//           clipboard.writeText(params.selectionText);
//         }
//       }
//     },
//     paste: {
//       id: 'paste',
//       label: '&Paste',
//       visible: params.isEditable,
//       click(menuItem) {
//         if (menuItem.transform) {
//           let clipboardContent = clipboard.readText(params.selectionText);
//           clipboardContent = menuItem.transform ? menuItem.transform(clipboardContent) : clipboardContent;
//           webContents.insertText(clipboardContent);
//         } else {
//           webContents.paste();
//         }
//       }
//     },
//     inspect: {
//       id: 'inspect',
//       label: 'I&nspect Element',
//       visible: DEBUG,
//       click() {
//         browserWindow.inspectElement(params.x, params.y);

//         if (webContents.isDevToolsOpened()) {
//           webContents.devToolsWebContents.focus();
//         }
//       }
//     },
//   }
//   let menuTemplate = []

//   let menuTemplateEdit = [
//     defaultActions.cut,
//     defaultActions.copy,
//     defaultActions.paste
//   ]

//   menuTemplate = menuTemplate.concat(menuTemplateEdit)

//   let menuTemplateDebug = [
//     defaultActions.inspect,
//   ]

//   if (IsMenuTemplateVisable(menuTemplate) && IsMenuTemplateVisable(menuTemplateDebug)) {
//     console.log(IsMenuTemplateVisable(menuTemplate))
//     menuTemplate.push(defaultActions.separator)
//     menuTemplate = menuTemplate.concat(menuTemplateDebug)
//   } else if (IsMenuTemplateVisable(menuTemplateDebug)) {
//     menuTemplate = menuTemplate.concat(menuTemplateDebug)
//   }

//   if (IsMenuTemplateVisable(menuTemplate)) {
//     const menu = Menu.buildFromTemplate(menuTemplate)
//     menu.popup(globalThis.browserWindow)
//   }
// }


// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。