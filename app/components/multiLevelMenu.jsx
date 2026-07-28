import React, { useState, useRef, useEffect } from 'react';

import { inputLatex } from '../utils'
import { openModal } from '../utils'

function MultiLevelMenu() {
  const [activeMenu, setActiveMenu] = useState(null); // 'trig', 'logs'
  const menuRef = useRef(null);

  // 点击外部关闭所有菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuData = {
    trig: {
      label: 'Trig',
      items: [
        { label: 'sin', action: () => inputLatex("function_sin") },
        { label: 'cos', action: () => inputLatex("function_cos") },
        { label: 'tan', action: () => inputLatex("function_tan") },
        { label: 'csc', action: () => inputLatex("function_csc") },
        { label: 'sec', action: () => inputLatex("function_sec") },
        { label: 'cot', action: () => inputLatex("function_cot") },
        { label: 'sinh', action: () => inputLatex("function_sinh") },
        { label: 'cosh', action: () => inputLatex("function_cosh") },
        { label: 'tanh', action: () => inputLatex("function_tanh") },
        { label: 'coth', action: () => inputLatex("function_coth") },
        { label: 'arcsin', action: () => inputLatex("function_arcsin") },
        { label: 'arccos', action: () => inputLatex("function_arccos") },
        { label: 'arctan', action: () => inputLatex("function_arctan") },
      ]
    },
    logs: {
      label: 'Logs',
      items: [
        { label: 'exp', action: () => inputLatex("function_exp") },
        { label: 'lg', action: () => inputLatex("function_lg") },
        { label: 'ln', action: () => inputLatex("function_ln") },
        { label: 'log', action: () => inputLatex("function_log") },
      ]
    },
    limits: {
      label: 'Limits',
      items: [
        { label: 'lim', action: () => inputLatex("function_lim") },
        { label: 'liminf', action: () => inputLatex("function_liminf") },
        { label: 'limsup', action: () => inputLatex("function_limsup") },
        { label: 'maximum', action: () => inputLatex("function_maximum") },
        { label: 'minimum', action: () => inputLatex("function_minimum") },
        { label: 'infinite', action: () => inputLatex("function_infinite") },
        { label: 'varinjlim', action: () => inputLatex("function_varinjlim") },
        { label: 'varprojlim', action: () => inputLatex("function_varprojlim") },
        { label: 'varliminf', action: () => inputLatex("function_varliminf") },
        { label: 'varlimsup', action: () => inputLatex("function_varlimsup") },
      ]
    },
    operations: {
      label: 'Operations',
      items: [
        { label: 'arg', action: () => inputLatex("function_arg") },
        { label: 'det', action: () => inputLatex("function_det") },
        { label: 'deg', action: () => inputLatex("function_deg") },
        { label: 'dim', action: () => inputLatex("function_dim") },
        { label: 'gcd', action: () => inputLatex("function_gcd") },
        { label: 'hom', action: () => inputLatex("function_hom") },
        { label: 'ker', action: () => inputLatex("function_ker") },
        { label: 'Pr', action: () => inputLatex("function_Pr") },
        { label: 'sup', action: () => inputLatex("function_sup") },
        { label: 'mod', action: () => inputLatex("function_mod") },
      ]
    },
    examples: {
      label: 'Examples',
      items: [
        { label: 'multiline equations', action: () => openModal("example_multiline_equations") },
        { label: 'input matrices', action: () => openModal("example_matrices") },
      ]
    },
    help: {
      label: 'Help',
      items: [
        { label: 'help', action: () => openModal("modal_help") },
        { label: 'reference', action: () => openModal("modal_reference") },
      ]
    }
  };

  return (
    <div className="container mt-5" ref={menuRef}>
      <div className="btn-toolbar" role="toolbar">

        {Object.entries(menuData).map(([key, menu]) => (

          <div className="btn-group me-2" key={key} role="group" >
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              onClick={() => setActiveMenu(activeMenu === key ? null : key)}
            >
              {menu.label} {activeMenu === key ? '▲' : '▼'}
            </button>

            {/* 二级菜单 */}
            <div
              className={`dropdown-menu ${activeMenu === key ? 'show' : ''}`}
              style={{
                position: 'absolute', // 绝对定位脱离文档流
                top: 0,              // 与父按钮顶部对齐
                left: '100%',        // 关键：向左偏移 100%，即出现在右侧
                marginTop: 0,        // 去掉默认 margin
                zIndex: 9999         // 确保在最上层
              }}
            >
              {menu.items.map((item, index) => (
                <button
                  key={index}
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    item.action();
                    setActiveMenu(null); // 点击后关闭菜单
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default MultiLevelMenu;