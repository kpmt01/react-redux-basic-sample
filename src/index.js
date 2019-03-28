import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    sayi: 0,
    sepet: []
}
const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "arttir":
            return {
                ...state,
                sayi: state.sayi + 1
            }
        case "azalt":
            return {
                ...state,
                sayi: state.sayi - 1
            }
        case "sepeteEkle":


            let c = null;
            state.sepet.forEach((x, i) => { c = (x.id === action.id) ? i : c });
            if (c === null) {
                state.sepet = state.sepet.concat({ id: action.id, count: 0 })
            }
            return {
                ...state,
                sepet: state.sepet.map(x => {
                    if (x.id === action.id) {
                        x.count++;
                    }
                    return x
                })
            }
        case 'sepettenSil':
            return {
                ...state,
                sepet: state.sepet.filter(x => x.id !== action.id)
            };
        default:
            return state
    }
};

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
