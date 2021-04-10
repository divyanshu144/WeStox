import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Index from './components/Index';
import Main from './components/Main';
import { Route, Switch } from "react-router-dom";


export default function App() {
  
  return (
    <div >
        <CssBaseline />
         <Switch>
            <Route path="/" exact component = {Index} />
            <Route path="/main" component = {Main} />
         </Switch>
    </div>
  );
}
