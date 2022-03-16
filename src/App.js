import React, { useState } from 'react';
import './App.css';
import HomePagina from "./Pages/HomePagina";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import Navigation from "./Components/Navigation"
import {Route, Switch,Redirect} from "react-router-dom";
import BlogPost from "./Pages/BlogPost";
import PrivateRoute from "./Components/PrivateRoute";
import { useForm } from 'react-hook-form';

function App() {

  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);


  return (
    <div>
      <Navigation
          isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
        <Switch>
          <Route exact path='/'>
            <HomePagina
            isAuth={isAuthenticated}/>
          </Route>
          <Route exact path='/login'>
            <Login isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>

          </Route>

          {/*<Route exact path='/blog'>*/}
          {/*  {isAuthenticated === true ? <Blog/> : <Redirect to="/"/>}*/}
          {/*</Route>*/}

          <PrivateRoute
              exact path="/blog"
              isAuth={isAuthenticated}
          >
            <Blog/>
          </PrivateRoute>

          <Route exact path='/blog/:id'>
            <BlogPost/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
