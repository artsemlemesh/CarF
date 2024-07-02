import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //for applying styles to reactstrap components (Container, Row, Col)
import GlobalState from "./GlobalContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./app/store.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Auth0Provider
      domain="dev-bnagrrvfmqn8go66.us.auth0.com"
      clientId="RAYpcOqb6PxyOirWhUkacP7BNCCvY2Q2"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {" "}
      <GlobalState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalState>
    </Auth0Provider>
  </Provider>
  // </React.StrictMode>
);
