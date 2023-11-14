import React from "react";

import ImageButtonGroup from "./imageButtonGroup.jsx";
import {
  greek_letters, basic_symbols, math_accents, math_fonts, math_set_symbols,
  notations, relation_symbols, common_use_keys, different_empty_spaces,
  binary_operator_symbols, relation_symbols2, arrows
} from "./view_settings.jsx"


export function InputPanel() {
  return (
    <>
      <div className="row row-cols-auto">
        <ImageButtonGroup image_button_keys={common_use_keys} group_row_item_nums={4}
          image_button_class={"image-button image-button-h100 image-button-w100"} />

        <ImageButtonGroup image_button_keys={greek_letters} group_row_item_nums={6} />

        <ImageButtonGroup image_button_keys={basic_symbols} group_row_item_nums={7} />

        <ImageButtonGroup image_button_keys={math_fonts} group_row_item_nums={1}
          image_button_class={"image-button image-button-w160"} />

        <ImageButtonGroup image_button_keys={different_empty_spaces} group_row_item_nums={1}
          image_button_class={"image-button image-button-w140"} />

        <ImageButtonGroup image_button_keys={math_accents} group_row_item_nums={4} />

        <ImageButtonGroup image_button_keys={notations} group_row_item_nums={4}
          image_button_class={"image-button image-button-w75"} />

        <ImageButtonGroup image_button_keys={math_set_symbols} group_row_item_nums={4} />

        <ImageButtonGroup image_button_keys={binary_operator_symbols} group_row_item_nums={9} />

        <ImageButtonGroup image_button_keys={relation_symbols} group_row_item_nums={10} />

        <ImageButtonGroup image_button_keys={relation_symbols2} group_row_item_nums={9} />

        <ImageButtonGroup image_button_keys={arrows} group_row_item_nums={8}
          image_button_class={"image-button image-button-w70"} />
      </div>
    </>
  );
}

export default InputPanel;