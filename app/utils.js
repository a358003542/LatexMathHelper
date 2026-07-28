import LatexSettings from './latex_settings.json'

export function displayLatex() {
    const latexResult = document.getElementById("latex-result")
    const editor = document.getElementById("latex-editor")
    latexResult.textContent = `$$${editor.value}$$`
    MathJax.typesetPromise([latexResult])
}

export function inputToEditor(editor, startString, endString) {
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

// name is unique key
export function inputLatex(name) {
    const editor = document.getElementById("latex-editor")
    let inputStart = ""
    let inputEnd = ""
    if (name in LatexSettings) {
      if ('latex_code' in LatexSettings[name]) {
        let latex_code = LatexSettings[name]['latex_code']
        if (typeof latex_code === 'string') {
          inputStart = latex_code
        } else {
          inputStart = latex_code[0]
          inputEnd = latex_code[1]
        }
      }
    }
  
    inputToEditor(editor, inputStart, inputEnd)
    displayLatex()
  }


 export function openModal(modal_name) {
  switch (modal_name) {
    case 'example_multiline_equations':
      window.example_multiline_equations.show();
      break;
    case 'example_matrices':
      window.example_matrices.show();
      break;
    case 'modal_help':
      window.modal_help.show();
      break;
    case 'modal_reference':
      window.modal_reference.show();
      break;
    default:
      console.warn('invalid modal name');
  }
}