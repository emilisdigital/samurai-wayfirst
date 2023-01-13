import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppPropsType = {

}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <div className="App-content">
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App;