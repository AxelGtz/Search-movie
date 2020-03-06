import React, { Fragment} from 'react';
import {Data} from './Components/Data';
import {Detalle} from './Components/Detalle'
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import './App.css';
import { Titulo } from './Components/Titulo';


const App = () => (
    <Fragment>
      <Titulo/>
      <BrowserRouter>
       <Switch>
           <Route exact path="/" component={Data}/>
           <Route exact path="/info/:id" component={Detalle}/>

       </Switch>
      
      </BrowserRouter>
    </Fragment>
)

export default App;
