import React from 'react';
import { connect } from 'react-redux';
import {filterCountry} from '../../actions';

const Filter = ({filterCountry, filter}) => {

    const setFilter = (country) => {
        if(country === filter){
            filterCountry('');
        } else{
            filterCountry(country);
        }
        return null;
    }
    

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
                        <button className="shop__filter-btn" onClick = {() => setFilter('Brazil')}>Brazil</button>
                        <button className="shop__filter-btn" onClick = {() => setFilter('Kenya') }>Kenya</button>
                        <button className="shop__filter-btn" onClick = {() => setFilter('Columbia')}>Columbia</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({filterReducer}) => {
    return {
        filter: filterReducer.country
    }
}

const mapDispatchToProps = {
    filterCountry
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter) 