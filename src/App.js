
import NavBar from "./nav.js";
import Home from "./Home.js";
import AboutUs from './About.js';
import Gallery from "./Gallery.js";
import ContactUs from "./Contact.js";
import OnlineOrder from "./online.js";
import Cart from "./cart.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
        <Router>
        <div>
            <NavBar />
            <header className="App-header">
                <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/AboutUs' component={AboutUs} />
                        <Route path='/Gallery' component={Gallery} />
                        <Route path='/ContactUs' component={ContactUs} />
                        <Route path='/OnlineOrder' component={OnlineOrder} />
                        <Route path="/Cart" component={Cart} />
                </Switch>          

            </header>
        </div>
        </Router>
    
   
  );

}


export default App;
