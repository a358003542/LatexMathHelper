import React from 'react';
import { displayLatex } from '../utils';


function LatexEditor() {
    return (
        <textarea id="latex-editor" rows={"15"} onInput={displayLatex}></textarea>
    )
}

export default LatexEditor