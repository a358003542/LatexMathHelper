import React from 'react';

import LatexSettings from '../latex_settings.json'
import {inputLatex} from '../utils'

function showStatusInfo(content) {
    const statusBarPanel = document.getElementById('statusBar')
    statusBarPanel.innerHTML = content
    MathJax.typesetPromise([statusBarPanel])
}

function showClickInfo(content) {
    const clickHistoryPanel = document.getElementById('clickHistory')
    clickHistoryPanel.innerHTML = content
    MathJax.typesetPromise([clickHistoryPanel])
}


function showHelpInfo(key) {
    if (key in LatexSettings) {
        if ('help_info' in LatexSettings[key]) {
            let help_info = LatexSettings[key]['help_info']
            showStatusInfo(help_info)
        }
    }
}

function showClickHistory(key) {
    if (key in LatexSettings) {
        if ('click_info' in LatexSettings[key]) {
            let click_info = LatexSettings[key]['click_info']
            showClickInfo(click_info)
        }
    }
}


function ImageButton(props) {
    let button_key = props.button_key
    let image_src = props.image_src
    const image_button_class = props.image_button_class

    function handleClick(e) {
        inputLatex(button_key)
        showClickHistory(button_key)
    }
    function handleMouseOver(e) {
        showHelpInfo(button_key)
    }
    return (
        <button type="button" button-key={button_key} className={image_button_class}
            onClick={handleClick} onMouseOver={handleMouseOver}>
            <img src={image_src} />
        </button>
    )
}

export default ImageButton