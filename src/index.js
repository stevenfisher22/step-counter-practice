// React Elements
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import Counter from './Counter';

// CSS
import './index.css';

// ****************************************************************

const INCREMENT = 'INCREMENT';
const RESET = 'RESET'

export function increment() {
    return { type: INCREMENT };
}
export function reset() {
    return { type: RESET};
}

const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case RESET: 
            return {
                count: 0
            };
        default: 
            return state;
    }
}

const store = createStore(reducer)

const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))