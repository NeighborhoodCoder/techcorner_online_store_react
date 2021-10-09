import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Catalog from "./components/catalog";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";
import Cart from "./components/cart";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <div className="conatiner-fluid">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/catalog" exact component={Catalog} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/about" exact component={About} />
              <Route path="/admin" exact component={Admin} />
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
