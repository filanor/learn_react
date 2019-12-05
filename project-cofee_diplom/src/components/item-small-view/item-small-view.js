import React from 'react';

import './item-small-view.sass';

const ItemSmallView = ({item}) => {
    const {name, url, price} = item;
    return (
        <>    
            <img src={url} alt="coffee"/>
                <div className="best__item-title">
                    {name}
                </div>
                <div className="shop__item-country">{item.country ? item.country : ''}</div>
            <div className="best__item-price">{price}</div>
        </>

    )
}

export default ItemSmallView;