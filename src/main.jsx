import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>            // Due to this es lint compo lifecycle shows 2 times monunted or it is calling legacy api's which is not allowed to call
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

  </BrowserRouter>
  // </React.StrictMode>
)