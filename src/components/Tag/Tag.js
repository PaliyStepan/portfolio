import React from "react";
import "./Tag.scss"

const Tag = (props) => {
    const {tag, end} = props;
    const cl = ['Tag', `Tag--${tag}`];

    end ? cl.push(`Tag--${tag}-end`) : cl.push(`Tag--${tag}-start`);

    return(
        <div className={cl.join(" ")}>
            {
                end ?  `</${tag}>` :  `<${tag}>`

            }
        </div>
    )
};

export default Tag;
