import React from 'react';

const Button = (props) => {
    return(
        <a href={props.link} className={`siteButton ${props.extraClass ? props.extraClass : ''}`}>
            <span className="buttonIcon"><i class={props.iconClass}></i></span>{props.buttonTitle}
        </a>
    );
}

export default Button;