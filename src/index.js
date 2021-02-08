import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Views
import App from './App';
import HomeContainer from './views/HomeContainer';
import AuthContainer from './views/AuthContainer';
import RegistrationContainer from './views/RegistrationContainer';
import PostContainer from './views/PostContainer'
import PostsContainer from './views/PostsContainer';
import ErrorContainer from './views/ErrorContainer';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/auth" component={AuthContainer} />
            <Route path="/registration" component={RegistrationContainer} />
            <Route exact path="/posts" component={PostsContainer} />
            <Route path="/posts/:id" component={PostContainer} />
            <Route path="*" component={ErrorContainer} />
          </Switch>
        </App>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
