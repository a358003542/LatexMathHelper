const buttons = document.querySelectorAll('.image-button')
const lodash = _

import { ButtonSettings, alertInfo } from './modules/buttonSettings.mjs'
import { inputLatex } from './modules/latex_editor.mjs'

// 默认按钮动作 inputLatex 默认按钮动作参数 button-key
// 默认的mouseover动作 alertInfo 默认为一个空格的占位符

for (let button of buttons) {
    let buttonKye = button.getAttribute("button-key")
    if (buttonKye) {
        let clickActionPara = lodash.get(ButtonSettings, `${buttonKye}.click`)
        let clickActionFunc = inputLatex
        let clickActionFuncArgs = [buttonKye]
        let mouseoverActionPara = lodash.get(ButtonSettings, `${buttonKye}.mouseover`)
        let mouseoverActionFunc = alertInfo
        let mouseoverActionFuncArgs = ["PlaceHolder String..."]

        if (clickActionPara) {
            if ("func" in clickActionPara) {
                clickActionFunc = clickActionPara["func"]
            }
            if ("funcArgs" in clickActionPara) {
                clickActionFuncArgs = clickActionPara["funcArgs"]
            }

            button.addEventListener("click",
                function (event) {
                    clickActionFunc.apply(button, clickActionFuncArgs)
                },
                false
            )
        }

        if (mouseoverActionPara) {
            if ("func" in mouseoverActionPara) {
                mouseoverActionFunc = mouseoverActionPara["func"]
            }
            if ("funcArgs" in mouseoverActionPara) {
                mouseoverActionFuncArgs = mouseoverActionPara["funcArgs"]
            }

            button.addEventListener("mouseover",
                function (event) {
                    mouseoverActionFunc.apply(button, mouseoverActionFuncArgs)
                },
                false
            )
        }
    }

}