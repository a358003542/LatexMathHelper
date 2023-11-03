import React from "react";

import ImageButtonGroup from "./imageButtonGroup.jsx";

const greek_letters = [
  "greek_letters_alpha",
  "greek_letters_beta",
  "greek_letters_gamma",
  "greek_letters_delta",
  "greek_letters_varepsilon",
  "greek_letters_zeta",
  "greek_letters_eta",
  "greek_letters_theta",
  "greek_letters_iota",
  "greek_letters_kappa",
  "greek_letters_lambda",
  "greek_letters_mu",
  "greek_letters_nu",
  "greek_letters_xi",
  "greek_letters_pi",
  "greek_letters_rho",
  "greek_letters_varsigma",
  "greek_letters_sigma",
  "greek_letters_tau",
  "greek_letters_upsilon",
  "greek_letters_varphi",
  "greek_letters_chi",
  "greek_letters_psi",
  "greek_letters_omega",
  "greek_letters_vartheta",
  "greek_letters_phi",
  "greek_letters_varpi",
  "greek_letters_digamma",
  "greek_letters_varkappa",
  "greek_letters_varrho",
  "greek_letters_epsilon",
  "greek_letters_Gamma",
  "greek_letters_Delta",
  "greek_letters_Theta",
  "greek_letters_Lambda",
  "greek_letters_Xi",
  "greek_letters_Pi",
  "greek_letters_Sigma",
  "greek_letters_Upsilon",
  "greek_letters_Phi",
  "greek_letters_Psi",
  "greek_letters_Omega"
]


const basic_symbols = [
  "basic_symbols_001",
  "basic_symbols_019",
  "basic_symbols_002",
  "basic_symbols_003",
  "basic_symbols_004",
  "basic_symbols_005",
  "basic_symbols_006",
  "basic_symbols_007",
  "basic_symbols_008",
  "basic_symbols_009",
  "basic_symbols_010",
  "basic_symbols_011",
  "basic_symbols_012",
  "basic_symbols_013",
  "basic_symbols_014",
  "basic_symbols_015",
  "basic_symbols_016",
  "basic_symbols_017",
  "basic_symbols_018"
]

const math_fonts = [
  "math_font_examples_1",
  "math_font_examples_2",
  "math_font_examples_3",
  "math_font_examples_4",
  "math_font_examples_5",
  "math_font_examples_6",
  "math_font_examples_7",
  "math_font_examples_8",
]
const math_accents = [
  "math_accents_acute",
  "math_accents_grave",
  "math_accents_tilde",
  "math_accents_bar",
  "math_accents_breve",
  "math_accents_check",
  "math_accents_hat",
  "math_accents_vec",
  "math_accents_dot",
  "math_accents_ddot",
  "math_accents_dddot",
  "math_accents_mathring",
  "math_accents_imath",
  "math_accents_jmath"
]


const notations = [
  "math_accents_widetilde",
  "math_accents_widehat",
  "notations-003",
  "notations-004",
  "notations-005",
  "notations-006",
  "notations-007",
  "notations-008",
  "notations-009",
  "notations-010",
  "notations-011",
  "notations-012",
]

const math_set_symbols = [
  "math_set_varnothing",
  "math_set_2",
  "math_set_3",
  "math_set_5",
  "math_set_6",
  "math_set_8",
  "math_set_9",
  "math_set_10",
  "math_set_7",
  "math_set_4",
]

const different_empty_spaces = [
  "different_empty_space_1",
  "different_empty_space_2",
  "different_empty_space_3",
  "different_empty_space_4",
  "different_empty_space_5",
]

const common_use_keys = [
  "common_use_1",
  "common_use_2",
  "common_use_3",
  "common_use_4",
  "common_use_5",
  "common_use_6",
  "common_use_7",
  "common_use2_1",
  "common_use2_2",
  "common_use2_3",
  "common_use2_4",
  "common_use2_5",
  "common_use2_6",
  "common_use2_7",
  "common_use2_8",
]


export function InputPanel() {
  return (
    <>
      <div className="row row-cols-auto">
        <ImageButtonGroup image_button_keys={common_use_keys} group_row_item_nums={4} 
         image_button_class={"image-button image-button-h100 image-button-w100"}/>

        <ImageButtonGroup image_button_keys={greek_letters} group_row_item_nums={6} />

        <ImageButtonGroup image_button_keys={basic_symbols} group_row_item_nums={4} />

        <ImageButtonGroup image_button_keys={math_fonts} group_row_item_nums={1}
          image_button_class={"image-button image-button-w160"} />

        <ImageButtonGroup image_button_keys={different_empty_spaces} group_row_item_nums={1}
          image_button_class={"image-button image-button-w140"} />

        <ImageButtonGroup image_button_keys={math_accents} group_row_item_nums={4} />

        <ImageButtonGroup image_button_keys={notations} group_row_item_nums={4} 
        image_button_class={"image-button image-button-w75"}/>

        <ImageButtonGroup image_button_keys={math_set_symbols} group_row_item_nums={4} />

      </div>
    </>
  );
}

export default InputPanel;