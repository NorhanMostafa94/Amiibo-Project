import React from 'react';
const AmiiboCard = (props) => {
    const { image, name, amiiboSeries } = props;
    return (
        <div className="grid-item">
            <img className="grid-item__img" src={image} alt={image} />
            <h6 className="grid-item__header">{name}</h6>
            <h6 className="grid-item__subheader">{amiiboSeries}</h6>
            <i className="fas fa-ellipsis-h"></i>
        </div>
    );
}

export default AmiiboCard;