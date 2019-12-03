import React from 'react';
import {Link} from 'react-router-dom';

import './item-small-view.sass';

const ItemSmallView = ({type, item}) => {
    console.log(item);
    const {name, url, price} = item
    return (
        <Link to = "/item/" className={type}>
            <div>
                
                <img src={url} alt="coffee"/>
                    <div className="best__item-title">
                        {name}
                    </div>
                    <div className="shop__item-country">{item.country ? item.country : ''}</div>
                    <div className="best__item-price">{price}</div>
            </div>
        </Link>
    )
}

export default ItemSmallView;