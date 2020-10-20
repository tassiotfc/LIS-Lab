import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Editais from './components/Pages/Editais';
import Erro404 from './components/Pages/Erro404';
import Home from './components/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/editais" component={Editais} exact />
        <Route component={Erro404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
