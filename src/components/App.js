import "../App.scss";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./Introduction";
import TopBar from "./TopBar";
import { Switch } from "react-foundation";
import HomePage from "./HomePage";
import ContactMe from "./ContactMe";

const App = () => {
    return (
        <div className="">
            <BrowserRouter>
                <TopBar/>
                <Routes>
                    <Route exact path="/" Component={HomePage}/>
                    <Route exact path="/contact" Component={ContactMe}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
