import { inputLatex } from './latex_editor.mjs'
const alertInfoPanel = document.getElementById('alertInfo')

function alertInfo(content) {
    alertInfoPanel.textContent = content
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
        "mouseover": { "funcArgs": ["Unicode: 003C5"] }
    },
    "greek_letters_varphi": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003C6"] }
    },
    "greek_letters_chi": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003C7"] }
    },
    "greek_letters_psi": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003C8"] }
    },
    "greek_letters_omega": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003C9"] }
    },
    "greek_letters_vartheta": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003D1"] }
    },
    "greek_letters_phi": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003D5"] }
    },
    "greek_letters_varpi": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003D6"] }
    },
    "greek_letters_digamma": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003DD"] }
    },
    "greek_letters_varepsilon": {
        "click": {},
        "mouseover": { "funcArgs": ["Greek Small Letter Epsilon Unicode: 003B5"] }
    },
    "greek_letters_varkappa": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003F0"] }
    },
    "greek_letters_varrho": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003F1"] }
    },
    "greek_letters_epsilon": {
        "click": {},
        "mouseover": { "funcArgs": ["Unicode: 003F5"] }
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
            { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Acute 。"] }
    },
    "math_accents_grave": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Grave 。"] }
    },
    "math_accents_tilde": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Tilde 。"] }
    },
    "math_accents_bar": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Macron 。"] }
    },
    "math_accents_breve": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Breve 。"] }
    },
    "math_accents_check": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Caron 。"] }
    },
    "math_accents_hat": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Circumflex  。"] }
    },
    "math_accents_vec": { "click": {}, "mouseover": {} },
    "math_accents_dot": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Dot Above  。"] }
    },
    "math_accents_ddot": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Diaeresis "] }
    },
    "math_accents_dddot": { "click": {}, "mouseover": {} },
    "math_accents_mathring": {
        "click": {},
        "mouseover": { "funcArgs": ["要查找Unicode符号推荐搜索关键词： Ring Above "] }
    },
    "math_accents_widetilde": { "click": {}, "mouseover": {} },
    "math_accents_widehat": { "click": {}, "mouseover": {} },
}

export { ButtonSettings, alertInfo }