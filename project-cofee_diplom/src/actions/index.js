const bestLoaded = (bests) => {
    return {
        type: 'BEST_LOADED',
        payload: bests
    }
}

const bestRequested = () => {
    return { type: 'BEST_REQUESTED' }
}

const bestError = () => {
    return { type: 'BEST_ERROR' }
}



const catalogLoaded = (catalog) => {
    return {
        type: 'CATALOG_LOADED',
        payload: catalog
    }
}

const catalogRequested = () => {
    return { type: 'CATALOG_REQUESTED'}
}

const catalogError = () => {
    return { type: 'CATALOG_ERROR' }
}

const formToggle = () => {
    return {type: 'FORM_TOGGLE'}
}

const filterCountry = (country) => {
    return {
        type: 'FILTER_COUNTRY',
        filter: country
    }
}

const filterSearch = (text) => {
    return {
        type: 'FILTER_SEARCH',
        search: text
    }
}
 

export {
    bestRequested,
    bestLoaded,
    bestError,
    catalogLoaded,
    catalogRequested,
    catalogError,
    formToggle,
    filterCountry, 
    filterSearch

}