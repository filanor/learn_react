import React from 'react';
import { connect } from 'react-redux';
import {filterCountry} from '../../actions';

const Filter = ({filterCountry}) => {

    return(
        <div className="row">
            <div className="col-lg-4 offset-2">
                <form action="#" className="shop__search">
                    <label className="shop__search-label" htmlFor="filter">Looking for</label>
                    <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
                </form>
            </div>
            <div className="col-lg-4">
                <div className="shop__filter">
                    <div className="shop__filter-label">
                        Or filter
                    </div>
                    <div className="shop__filter-group">
                        <button className="shop__filter-btn" onClick = {() => filterCountry('Brazil')}>Brazil</button>
                        <button className="shop__filter-btn" onClick = {() => filterCountry('Kenya') }>Kenya</button>
                        <button className="shop__filter-btn" onClick = {() => filterCountry('Columbia')}>Columbia</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    filterCountry
}

export default connect(null, mapDispatchToProps)(Filter) 