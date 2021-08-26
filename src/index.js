import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, browserHistory } from "react-router";
// browserHistory는 url이 업데이트 될 때,
// 리액트 라우터는 프로토콜 이후 모든 것을 해석함

// import App from './components/app';
import reducers from "./reducers";
import routes from "./routes";
import promise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector(".container")
);
