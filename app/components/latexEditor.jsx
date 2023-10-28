import React from 'react';
import { displayLatex } from '../utils';


function LatexEditor() {
    return (
        <div className="row">
            <textarea id="latex-editor" onInput={displayLatex}></textarea>
        </div>
    )
}

export default LatexEditor