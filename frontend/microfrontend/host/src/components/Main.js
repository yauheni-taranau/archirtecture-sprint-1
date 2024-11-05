import React, {lazy, Suspense, useEffect} from "react";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";
import InfoTooltip from "./InfoTooltip";

const Login = lazy(() => import('auth/Login').catch((e) => {
        console.log(e);
        return {default: () => <div className='error'>Component is not available!</div>};
    })
);

const Register = lazy(() => import('auth/Register').catch(() => {
        return {default: () => <div className='error'>Component is not available!</div>};
    })
);

const Profile = lazy(() => import('profile/Profile').catch(() => {
        return {default: () => <div className='error'>Component is not available!</div>};
    })
);

const Content = lazy(() => import('content/Content').catch(() => {
        return {default: () => <div className='error'>Component is not available!</div>};
    })
);

const App = () => {

    const history = useHistory();

    const [currentUser, setCurrentUser] = React.useState({});
    const [email, setEmail] = React.useState("");
    const [tooltipStatus, setTooltipStatus] = React.useState("");
    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    function onRegister() {
        setTooltipStatus("success");
        setIsInfoToolTipOpen(true);

        history.push("/signin");
    }

    function onRegisterFail() {
        console.log('asdsd')
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
    }

    function onLogin() {
        console.log(history);
        setIsLoggedIn(true);
        history.push("/");
    }

    function onLoginFail() {
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
    }

    useEffect(() => {
        addEventListener("register", onRegister);
        return () => removeEventListener("register", onRegister)
    }, [])

    useEffect(() => {
        addEventListener("register-fail", onRegisterFail);
        return () => removeEventListener("register-fail", onRegisterFail)
    }, [])

    useEffect(() => {
        addEventListener("login", onLogin);
        return () => removeEventListener("login", onRegister)
    }, [])

    useEffect(() => {
        addEventListener("login-fail", onLoginFail);
        return () => removeEventListener("login-fail", onLoginFail)
    }, [])

    function closeAllPopups() {
        setIsInfoToolTipOpen(false);
    }

    return <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
            <Header email={email}/>
            <Suspense>
                <Switch>
                    {
                        () => {
                            !isLoggedIn ? <Redirect to="./signin"/> : <Route path="/" exact>
                                <section><Profile/><Content/></section>
                            </Route>
                        }
                    }
                    <Route path="/signin">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <Register/>
                    </Route>
                </Switch>
            </Suspense>

            <Footer/>

            <InfoTooltip
                isOpen={isInfoToolTipOpen}
                onClose={closeAllPopups}
                status={tooltipStatus}
            />
        </div>
    </CurrentUserContext.Provider>
};
export default App;