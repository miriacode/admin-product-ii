import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AllProducts from "./components/AllProducts";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <AllProducts />} />
          <Route path="/new" render={() => <NewProduct />} />
          <Route path="/product/:id" exact render={()=> <Product />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
