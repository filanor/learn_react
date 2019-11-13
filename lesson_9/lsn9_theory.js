/**
 * 
 * 
 * УРОК №9

Жизненный цикл компонентов


 http-server
 https://www.npmjs.com/package/http-server

 hooks
 https://reactjs.org/docs/react-component.html#lifecycle-methods


RegEx
https://regex101.com/




Жизненый цикл компонента :
1. компонент появляется на странице:*/
componentDidMount() 
/*
2  компонент обновляется
    - new props
    - setState   */
componentDidUpdate()
/*
3. Компонент был удален  */
componentWillUnmount()

/*
4. Произошла ошибка*/
componentDidCatch()
// Есть и другие хуки, но в большинстве случаев используются эти


// Mounting  - метод вызывается тогда, кодга компонентуспешно отрисовался и появился на странице
// Этот метод самое подходящее место для запросов к API и инициализации нашего компоненте
//
// Unmount вызывается еще до удаления компонента - лучшее место для остановки таймаутов или отписки от сервисов