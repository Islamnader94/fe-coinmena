import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListProduct from "../containers/product/ListProduct";
import EditProduct from "../containers/product/EditProduct";
import React from "react";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
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