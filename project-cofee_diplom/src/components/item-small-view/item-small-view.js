import React from 'react';
import {Link} from 'react-router-dom';

import './item-small-view.sass';

const ItemSmallView = ({type}) => {
    return (
        <Link to = "/item/" className={type}>
            <div>
                <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                    <div className="best__item-title">
                        Solimo Coffee Beans 2kg
                    </div>
                    <div class="shop__item-country">Brazil</div>
                    <div className="best__item-price">10.73$</div>
            </div>
        </Link>
    )
}

export default ItemSmallView;