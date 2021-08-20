import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Tweet from "./components/tweets";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/tweets" exact component={Tweet}/>
                    </Switch>
                </header>

            </div>
        </Router>
    );
}

export default App;
