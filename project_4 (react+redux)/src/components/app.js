import React, {Fragment} from 'react';
import Todos from './todos';
import FormTodo from './formToDo';

const App = () => {
    return (
        <Fragment>
            <div className = "content">
                <Todos/>
                <FormTodo/>
            </div>
        </Fragment>
    );
};

export default App;