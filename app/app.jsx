import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImageButton from './components/imageButton.jsx';
import LatexEditor from './components/latexEditor.jsx';
import LatexResult from './components/latexResult.jsx';
import StatusBar from './components/statusBar.jsx';

import {inputLatex} from './utils'

import image_greek_letters1 from './images/greek_letters/math_icon_greek_letters-001.png';
import image_greek_letters2 from './images/greek_letters/math_icon_greek_letters-002.png';
import image_greek_letters3 from './images/greek_letters/math_icon_greek_letters-003.png';
import image_greek_letters4 from './images/greek_letters/math_icon_greek_letters-004.png';
import image_greek_letters25 from './images/greek_letters/math_icon_greek_letters-025.png';
import image_greek_letters6 from './images/greek_letters/math_icon_greek_letters-006.png';
import image_greek_letters7 from './images/greek_letters/math_icon_greek_letters-007.png';


function InputPanel() {
  let button_info = [
    { 'button_key': "greek_letters_alpha", "image_src": image_greek_letters1 },
    { 'button_key': "greek_letters_beta", "image_src": image_greek_letters2 },
    { 'button_key': "greek_letters_gamma", "image_src": image_greek_letters3 },
    { 'button_key': "greek_letters_delta", "image_src": image_greek_letters4 },
    { 'button_key': "greek_letters_varepsilon", "image_src": image_greek_letters25 },
    { 'button_key': "greek_letters_zeta", "image_src": image_greek_letters6 },
    { 'button_key': "greek_letters_eta", "image_src": image_greek_letters7 },
  ]
  const image_buttons = button_info.map(button_item => {
    return <ImageButton button_key={button_item["button_key"]}
      image_src={button_item["image_src"]} key={button_item["button_key"]} />
  })

  return (
    <>
      <div className="row row-cols-auto">
        <div className="col">
          <div className="dropdown">
            <div className="image-button-group-head">

              {image_buttons}

            </div>
          </div>
        </div>
      </div >
    </>
  )
}

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
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

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

// bind inputLatex message channle to inputLatex function
window.electron.receive("inputLatex", inputLatex);