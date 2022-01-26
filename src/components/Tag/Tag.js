import React from "react";
import "./Tag.scss"

const Tag = (props) => {
    const {tag, end} = props;
    const cl = ['Tag', `Tag__${tag}`];

    end ? cl.push(`Tag__${tag}_end`) : cl.push(`Tag__${tag}_start`);

    return(
        <div className={cl.join(" ")}>
            {
                end ?  `</${tag}>` :  `<${tag}>`

            }
        </div>
    )
};

export default Tag;
