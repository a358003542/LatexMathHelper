

const editor = document.getElementById("latex-editor")
const latexResult = document.getElementById("latex-result")



function inputToEditor(editor, startString, endString) {
    let hasEndString = Boolean(endString)

    let selectionStart = editor.selectionStart
    let selectionEnd = editor.selectionEnd

    let oldText = editor.value

    if (hasEndString) {
        editor.value = `${oldText.substring(0, selectionStart)}${startString}${oldText.substring(selectionStart, selectionEnd)}${endString}`
        editor.setSelectionRange(selectionStart + startString.length, selectionEnd + startString.length)
    } else {
        editor.value = `${oldText.substring(0, selectionStart)}${startString}${oldText.substring(selectionEnd)}`
        if (selectionStart === selectionEnd) {
            editor.setSelectionRange(selectionStart + startString.length, selectionStart + startString.length)
        } else {
            editor.setSelectionRange(selectionStart, selectionStart + startString.length)
        }

    }
    editor.focus();
}


function inputLatex(name) {
    let inputStart = ""
    let inputEnd = ""
    if (name in LatexCodes) {
        if (typeof LatexCodes[name] === 'string') {
            inputStart = LatexCodes[name]
        } else {
            inputStart = LatexCodes[name][0]
            inputEnd = LatexCodes[name][1]
        }
    }

    inputToEditor(editor, inputStart, inputEnd)
    displayLatex()
}

function displayLatex() {
    latexResult.textContent = `$$${editor.value}$$`
    MathJax.typeset()
}

editor.addEventListener("input", function (event) {
    displayLatex()
}, false)