import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import LatexEditor from './components/latexEditor.jsx';
import LatexResult from './components/latexResult.jsx';
import StatusBar from './components/statusBar.jsx';
import InputPanel from './components/inputPanel.jsx';

import { inputLatex } from './utils'


function Main() {
  return (
    <div className="flex-wrapper">

      <main >
        <div className="container-fluid">
          <br />
          <InputPanel />
          <hr />
          <div className="row">
            <div className="col-6">
              <LatexEditor />
            </div>
            <div className="col-6">
              <LatexResult />
            </div>
          </div>
        </div>
      </main>

      <StatusBar />

    </div>
  );
}

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Main />
);


function documentReadyAction() {
}


function openModal(modal_name) {
  switch (modal_name) {
    case 'example_multiline_equations':
      window.example_multiline_equations.show();
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

if (document.readyState !== 'loading') {
  documentReadyAction()
} else {
  document.addEventListener('DOMContentLoaded', documentReadyAction)
}

// bind inputLatex message channle to inputLatex function
window.electron.receive("inputLatex", inputLatex);
window.electron.receive("openModal", openModal);