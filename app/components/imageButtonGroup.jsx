import React from "react";
import lodash from 'lodash'

import ImageButton from "./imageButton.jsx";
import LatexSettings from '../latex_settings.json'



export function ImageButtonGroup(props) {
    const image_button_keys = props.image_button_keys
    const group_row_item_nums = props.group_row_item_nums
    const image_button_class = props.image_button_class ? props.image_button_class : "image-button"

    let image_buttons_group = lodash.chunk(image_button_keys, group_row_item_nums)

    const image_buttons_head = image_buttons_group[0].map(button_key => {
        let image_src = `../main_window/static/${LatexSettings[button_key]["button_image"]}`
        return <ImageButton button_key={button_key}
            image_src={image_src} key={button_key} image_button_class={image_button_class} />;
    });

    let group_count = 0    
    const image_buttons_body = image_buttons_group.slice(1).map(image_buttons => {
        group_count++;
        let image_button_group = image_buttons.map(button_key => {
            let image_src = `../main_window/static/${LatexSettings[button_key]["button_image"]}`
            return <ImageButton button_key={button_key}
                image_src={image_src} key={button_key} image_button_class={image_button_class}/>
        })

        return <div key={group_count} className="image-button-group-row">
            {image_button_group}
        </div>
    })

    const hasBody = image_buttons_group.length > 1

    return (
        <>
            <div className="col">
                <div className="dropdown">

                    <div className="image-button-group-head">
                        {image_buttons_head}
                    </div>

                    {hasBody &&
                        <div className="image-button-group-body">
                            {image_buttons_body}
                        </div>
                    }


                </div>
            </div>
        </>
    );
}

export default ImageButtonGroup;