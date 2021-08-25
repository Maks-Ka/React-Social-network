import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Spinner from "./components/common/Spinner/Spinner";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { withSuspense } from "./hoc/withSuspense";
import store from './redux/redux-store';
import NavbarContainer from './components/Navbar/NavbarContainer';



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
        //console.error(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Spinner />
        }
        
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                            render={() => <Redirect to={"/profile"} />} />

                        <Route path='/dialogs'
                            render={withSuspense(DialogsContainer)} />

                        <Route path='/profile/:userId?'
                            render={withSuspense(ProfileContainer)} />

                        <Route path='/users'
                            render={() => <UsersContainer />} />

                        <Route path='/login'
                            render={() => <LoginPage />} />


                        <Route path='/News' render={() => <News />} />
                        <Route path='/Music' render={() => <Music />} />
                        <Route path='/Setting' render={() => <Setting />} />
                        
                        <Route path='*'
                            render={() => <div>404 NOT FOUND</div>} />
                    </Switch>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store} >
                <AppContainer />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}


export default SamuraiJSApp;