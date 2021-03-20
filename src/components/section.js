import React from 'react';

const Section = (props) => {
    return(
    <div className={`section ${props.classPlus}`}>
        {props.children}
    </div>
    );
}

export default Section;