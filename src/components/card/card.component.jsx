import React from 'react';
import './card.styles.scss'

const CardComponent = ({title, chooseSection}) => {
    return(
        <div className="content">
            <div className="section-name">
                {title} SELECTION
            </div>
            <span onClick={()=>chooseSection(title)}>&#10149;</span>
        </div>
    )
};

export default CardComponent;