import AppRouter from "./config/approuter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./config/redux/store.js";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />;
      </Provider>
    </>
  );
}
