import React from 'react';
const AmiiboCard = (props) => {
    const { image, name } = props;
    return (
        <div className="grid-item">
            <img className="grid-item__img" src={image} alt={image} />
            {/* <h4>{name}</h4> */}
            <h5 className="grid-item__header">{name}</h5>
        </div>
    );
}

export default AmiiboCard;