import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LatexEditor from './components/latexEditor.jsx';
import LatexResult from './components/latexResult.jsx';
import StatusBar from './components/statusBar.jsx';
import InputPanel from './components/inputPanel.jsx';
import ModalExample1 from './components/modalExample1.jsx';
import ModalHelp from './components/modalHelp.jsx';
import ModalReference from './components/modalReference.jsx';

import { inputLatex } from './utils'


function Main() {
  return (
    <>
      <div className="container">
        <main>
          <br />

          <InputPanel />

          <LatexEditor />

          <LatexResult />
        </main>
      </div>
      <StatusBar />

      <ModalExample1 />
      <ModalHelp />
      <ModalReference />

    </>
  );
}

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Main />
);


function forceLinkOpenExternal() {
  const hrefs = document.querySelectorAll('a[href]')
  for (let link of hrefs) {
    link.addEventListener(
      "click",
      function (event) {
        event.preventDefault()
        window.electron.openExternal(link.href)
      },
      false
    )
  }
}

forceLinkOpenExternal();

function openModal(modal_name) {
  switch (modal_name) {
    case 'modal_example1':
      window.modal_example1.handleShow();
      break;
    case 'modal_help':
      window.modal_help.handleShow();
      break;
    case 'modal_reference':
      window.modal_reference.handleShow();
      break;
    default:
      console.warn('invalid modal name');
  }
}

// bind inputLatex message channle to inputLatex function
window.electron.receive("inputLatex", inputLatex);
window.electron.receive("openModal", openModal);