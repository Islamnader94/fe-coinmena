import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import ListProduct from "../containers/product/ListProduct";
import EditProduct from "../containers/product/EditProduct";
import React from "react";

export const history = createBrowserHistory({forceRefresh: true});

const AppRouter = () => {
    return(
        <div style={style}>
            <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={ListProduct} />
                        <Route path="/edit-products/:id" component={EditProduct} />
                    </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;