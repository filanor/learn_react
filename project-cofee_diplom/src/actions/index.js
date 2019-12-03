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


export {
    bestRequested,
    bestLoaded,
    bestError,
    catalogLoaded,
    catalogRequested,
    catalogError
}