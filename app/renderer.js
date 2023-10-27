import './index.css';
import './app.jsx'
console.log('👋 This message is being logged by "renderer.js", included via webpack');

// const buttons = document.querySelectorAll('.image-button')
// const lodash = _

// import { ButtonSettings, showStatusInfo } from './modules/buttonSettings.mjs'
// import { inputLatex } from './modules/latex_editor.mjs'


// // 默认按钮动作 inputLatex 默认按钮动作参数 button-key
// // 默认的mouseover动作 showStatusInfo 默认为空字符串
// function bindImageButtonAction() {
//     for (let button of buttons) {
//         let buttonKye = button.getAttribute("button-key")
//         if (buttonKye) {
//             let clickActionPara = lodash.get(ButtonSettings, `${buttonKye}.click`)
//             let clickActionFunc = inputLatex
//             let clickActionFuncArgs = [buttonKye]
//             let mouseoverActionPara = lodash.get(ButtonSettings, `${buttonKye}.mouseover`)
//             let mouseoverActionFunc = showStatusInfo
//             let mouseoverActionFuncArgs = [""]

//             if (clickActionPara) {
//                 if ("func" in clickActionPara) {
//                     clickActionFunc = clickActionPara["func"]
//                 }
//                 if ("funcArgs" in clickActionPara) {
//                     clickActionFuncArgs = clickActionPara["funcArgs"]
//                 }

//                 button.addEventListener("click",
//                     function (event) {
//                         clickActionFunc.apply(button, clickActionFuncArgs)
//                     },
//                     false
//                 )
//             }

//             if (mouseoverActionPara) {
//                 if ("func" in mouseoverActionPara) {
//                     mouseoverActionFunc = mouseoverActionPara["func"]
//                 }
//                 if ("funcArgs" in mouseoverActionPara) {
//                     mouseoverActionFuncArgs = mouseoverActionPara["funcArgs"]
//                 }

//                 button.addEventListener("mouseover",
//                     function (event) {
//                         mouseoverActionFunc.apply(button, mouseoverActionFuncArgs)
//                     },
//                     false
//                 )
//             }
//         }

//     }
// }

// function forceLinkOpenExternal() {
//     const hrefs = document.querySelectorAll('a[href]')
//     for (let link of hrefs) {
//         link.addEventListener(
//             "click",
//             function (event) {
//                 event.preventDefault()
//                 window.electron.openExternal(link.href)
//             },
//             false
//         )
//     }
// }


// function loading_action() {
//     bindImageButtonAction()
//     forceLinkOpenExternal()

//     // bind inputLatex message channle to inputLatex function
//     // window.electron.receive("inputLatex", inputLatex)
// }


// if (document.readyState !== 'loading') {
//     loading_action()
// } else {
//     document.addEventListener('DOMContentLoaded', loading_action)
// }

