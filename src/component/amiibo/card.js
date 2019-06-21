import React from 'react';
const AmiiboCard = (props) => {
    const { image, name } = props;
    return (
        <div className="grid-item">
            <img className="card-img" src={image} alt={image} />
            {/* <h4>{name}</h4> */}
            <h5 className="card__header">{name}</h5>
        </div>
    );
}

export default AmiiboCard;