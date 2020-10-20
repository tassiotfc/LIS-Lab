import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Editais from './Pages/Editais';
import Erro404 from './Pages/Erro404';
import Home from './Pages/Home';

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
