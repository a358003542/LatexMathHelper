import { inputLatex } from './latex_editor.mjs'
const statusBarPanel = document.getElementById('statusBar')

function showStatusInfo(content) {
    statusBarPanel.innerHTML = content
    window.MathJax.typeset([statusBarPanel])
}


const ButtonSettings = {
    "greek_letters_alpha": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Alpha Unicode: 003B1"] }
    },
    "greek_letters_beta": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Beta Unicode: 003B2"] }
    },
    "greek_letters_gamma": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Gamma Unicode: 003B3"] }
    },
    "greek_letters_delta": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Delta Unicode: 003B4"] }
    },
    "greek_letters_zeta": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Zeta Unicode: 003B6"] }
    },
    "greek_letters_eta": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Eta Unicode: 003B7"] }
    },
    "greek_letters_theta": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Theta Unicode: 003B8"] }
    },
    "greek_letters_iota": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Iota Unicode: 003B9"] }
    },
    "greek_letters_kappa": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Kappa Unicode: 003BA"] }
    },
    "greek_letters_lambda": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Lamda Unicode: 003BB"] }
    },
    "greek_letters_mu": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Mu Unicode: 003BC"] }
    },
    "greek_letters_nu": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Nu Unicode: 003BD"] }
    },
    "greek_letters_xi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Xi Unicode: 003BE"] }
    },
    "greek_letters_pi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Pi Unicode: 003C0"] }
    },
    "greek_letters_rho": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Rho Unicode: 003C1"] }
    },
    "greek_letters_varsigma": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Final Sigma Unicode: 003C2"] }
    },
    "greek_letters_sigma": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Sigma Unicode: 003C3"] }
    },
    "greek_letters_tau": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Tau Unicode: 003C4"] }
    },
    "greek_letters_upsilon": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Upsilon Unicode: 003C5"] }
    },
    "greek_letters_varphi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Phi Unicode: 003C6"] }
    },
    "greek_letters_chi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Chi Unicode: 003C7"] }
    },
    "greek_letters_psi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Psi Unicode: 003C8"] }
    },
    "greek_letters_omega": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Omega Unicode: 003C9"] }
    },
    "greek_letters_vartheta": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Theta Symbol Unicode: 003D1"] }
    },
    "greek_letters_phi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Phi Symbol Unicode: 003D5"] }
    },
    "greek_letters_varpi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Pi Symbol Unicode: 003D6"] }
    },
    "greek_letters_digamma": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Digamma Unicode: 003DD"] }
    },
    "greek_letters_varepsilon": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Epsilon Unicode: 003B5"] }
    },
    "greek_letters_varkappa": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Kappa Symbol Unicode: 003F0"] }
    },
    "greek_letters_varrho": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Rho Symbol Unicode: 003F1"] }
    },
    "greek_letters_epsilon": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Lunate Epsilon Symbol Unicode: 003F5"] }
    },
    "greek_letters_Gamma": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Gamma Unicode: 00393"] }
    },
    "greek_letters_Delta": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Delta Unicode: 00394"] }
    },
    "greek_letters_Theta": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Theta Unicode: 00398"] }
    },
    "greek_letters_Lambda": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Lamda Unicode: 0039B"] }
    },
    "greek_letters_Xi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Xi Unicode: 0039E"] }
    },
    "greek_letters_Pi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Pi Unicode: 003A0"] }
    },
    "greek_letters_Sigma": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Sigma Unicode: 003A3"] }
    },
    "greek_letters_Upsilon": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Upsilon Unicode: 003A5"] }
    },
    "greek_letters_Phi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Phi Unicode: 003A6"] }
    },
    "greek_letters_Psi": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Psi Unicode: 003A8"] }
    },
    "greek_letters_Omega": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Capital Letter Omega Unicode: 003A9"] }
    },
    "math_accents_acute": {
        "click": {},
        "mouseover":
            { "funcArgs": ["Unicode Search key: Acute "] }
    },
    "math_accents_grave": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Grave "] }
    },
    "math_accents_tilde": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Tilde "] }
    },
    "math_accents_bar": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Macron "] }
    },
    "math_accents_breve": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Breve "] }
    },
    "math_accents_check": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Caron "] }
    },
    "math_accents_hat": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Circumflex  "] }
    },
    "math_accents_vec": {
        "click": {},
        "mouseover": { "funcArgs": ["Relevant Unicode Symbol: 020D7 "] }
    },
    "math_accents_dot": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Dot Above  "] }
    },
    "math_accents_ddot": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Diaeresis "] }
    },
    "math_accents_dddot": {
        "click": {},
        "mouseover": { "funcArgs": ["Relevant Unicode Symbol: 020DB "] }
    },
    "math_accents_mathring": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode Search key: Ring Above "] }
    },
    "math_accents_imath": {
        "click": {},
        "mouseover": { "funcArgs": ["add accent to i, need use \\imath get the dotless i. "] }
    },
    "math_accents_jmath": {
        "click": {},
        "mouseover": { "funcArgs": ["add accent to j, need use \\jmath get the dotless j. "] }
    },
    "math_accents_widetilde": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "math_accents_widehat": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-003": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-004": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-005": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-006": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-007": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },

    "notations-008": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-009": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-010": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-011": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },
    "notations-012": {
        "click": {},
        "mouseover": { "funcArgs": ["notations "] }
    },

    "math_set_varnothing": {
        "click": {},
        "mouseover": { "funcArgs": ["Empty set Unicode: 02205 "] }
    },
    "math_set_2": {
        "click": {},
        "mouseover": { "funcArgs": ["Set of natual numbers Unicode: 02115 "] }
    },
    "math_set_3": {
        "click": {},
        "mouseover": { "funcArgs": ["Set of integers Unicode: 02124 "] }
    },
    "math_set_5": {
        "click": {},
        "mouseover": { "funcArgs": ["Set of rational numbers Unicode: 0211A "] }
    },

    "math_set_6": {
        "click": {},
        "mouseover": { "funcArgs": ["Set of real numbers Unicode: 0211D "] }
    },
    "math_set_8": {
        "click": {},
        "mouseover": { "funcArgs": ["Set of complex numbers Unicode: 02102 "] }
    },
    "math_set_9": {
        "click": {},
        "mouseover": { "funcArgs": ["Set of integer modulo n "] }
    },
    "math_set_10": {
        "click": {},
        "mouseover": { "funcArgs": ["Three-dimensional Euclidean space "] }
    },
    "math_set_7": {
        "click": {},
        "mouseover": { "funcArgs": ["Set of positive real numbers "] }
    },
    "math_set_4": {
        "click": {},
        "mouseover": { "funcArgs": ["Set of positive integers "] }
    },
    // basic_symbols
    "basic_symbols_001": {
        "click": {},
        "mouseover": { "funcArgs": ["Cardinality of natural numbers: <code>$\\aleph_0$</code> $\\aleph_0$ "] }
    },
    "basic_symbols_019": {
        "click": {},
        "mouseover": { "funcArgs": ["Cardinality of real numbers: <code>$\\mathfrak{c}$</code> $\\mathfrak{c}$ "] }
    },
    "basic_symbols_002": {
        "click": {},
        "mouseover": { "funcArgs": ["Line one in geometry: <code>$\\ell_1$</code> $\\ell_1$"] }
    },
    "basic_symbols_003": {
        "click": {},
        "mouseover": { "funcArgs": ["Partial differential: <code>$\\partial x$</code> $\\partial x$"] }
    },
    "basic_symbols_004": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_005": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_006": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_007": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_008": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_009": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_010": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_011": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_012": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_013": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_014": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_015": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_016": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_017": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },
    "basic_symbols_018": {
        "click": {},
        "mouseover": { "funcArgs": ["basic symbols "] }
    },

    "math_font_examples_1": {
        "mouseover": { "funcArgs": ["normal math font"] }
    },
    "math_font_examples_2": {
        "click": {},
        "mouseover": { "funcArgs": ["mathbf"] }
    },
    "math_font_examples_3": {
        "click": {},
        "mouseover": { "funcArgs": ["mathrm"] }
    },
    "math_font_examples_4": {
        "click": {},
        "mouseover": { "funcArgs": ["mathsf"] }
    },
    "math_font_examples_5": {
        "click": {},
        "mouseover": { "funcArgs": ["mathit"] }
    },
    "math_font_examples_6": {
        "click": {},
        "mouseover": { "funcArgs": ["mathcal"] }
    },
    "math_font_examples_7": {
        "click": {},
        "mouseover": { "funcArgs": ["mathbb"] }
    },
    "math_font_examples_8": {
        "click": {},
        "mouseover": { "funcArgs": ["mathfrak"] }
    },
}

export { ButtonSettings, showStatusInfo }