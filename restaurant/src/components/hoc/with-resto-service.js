import React from 'react';
import RestoServiceContext from '../resto-service-context';


// Создаем компонент высшего порядка. (Это функция, которая возвращает функцию, которая как аргумент получает
// компонент)
// Wrapped - так называется компонент в этой функции. По факту сюда может передаваться любой компонент
const WithRestoService = () => (Wrapped) => { 
    // Компонент может содержать какие-то props
    return (props) => {  
        // Возвращаем верстку, которую необходимо отрендерить
        return (
            <RestoServiceContext.Consumer>
                {
                    // RestoService получаем из провайдера (контекста)
                    (RestoService) => {
                        return <Wrapped {...props} RestoService = {RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;
// WithRestoService позволяет скрыть использование Consumer.
// По сути мы оборачиваем пришедший компонент в <RestoServiceContext.Consumer> и передаем ему
// все его props + RestoService пришедший из контекста