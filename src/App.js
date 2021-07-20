import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "./router/Router.js"
import "./index.css"

export const App = () => {
  return (
    <div className="App">
      <div className="blog-header">
        <h2 className="blog-title">
          <a className="blog-link" href="/home">The Alkemy Blog!</a>
        </h2>
      </div>
      <Router />
    </div>
  );
}