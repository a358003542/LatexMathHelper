import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import LatexEditor from './components/latexEditor.jsx';
import LatexResult from './components/latexResult.jsx';
import StatusBar from './components/statusBar.jsx';
import InputPanel from './components/inputPanel.jsx';
import MultiLevelMenu from './components/multiLevelMenu.jsx';

import { inputLatex } from './utils'


function Main() {
  return (
    <div className="flex-wrapper">

      <main >
        <div className="container-fluid">
          <MultiLevelMenu />  
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

          <hr />
          <StatusBar />
        </div>
      </main>

    </div>
  );
}

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Main />
);


function documentReadyAction() {
}


if (document.readyState !== 'loading') {
  documentReadyAction()
} else {
  document.addEventListener('DOMContentLoaded', documentReadyAction)
}