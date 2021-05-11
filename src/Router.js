import React from 'react'
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Startup from './Pages/Startup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

 function Router() {
    return (
       <BrowserRouter>
       <Switch>
            <Route exact path="/" component={HomePage} />
           <Route  path="/login" component={Login} />
           <Route  path="/register" component={Register} />
           <Route  path="/startup" component={Startup} />
           
       </Switch>
       </BrowserRouter>
    )
}
export default Router;
