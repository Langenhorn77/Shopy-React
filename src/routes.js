import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/HOME/Home.js';
import Products from './components/PRODUCTS/Products.js';
import FormPage from './components/FORM-PAGE/FormPage.js'
import NotFound from './components/NotFound/notfound.js';
import ProductPage from './components/PRODUCT-PAGE/ProductPage.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/catalog" component={Products}/>
            <Route path="/productpage" component={ProductPage}/>
            <Route path="/form" component={FormPage}/>

            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;
