// Вспомогательные функции
export const inc = () => ( {type: 'INC'} );
export const dec = () => ( {type: 'DEC'} );
export const res = () => ( {type: 'RES'} );
export const upl = () => ( {type: 'UPL'} );
export const dnl = (dnlVal) => ( {type: 'DNL', dnlVal} );