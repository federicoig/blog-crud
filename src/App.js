import { Router } from "./router/Router.js"
import { Header } from './components/header/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}