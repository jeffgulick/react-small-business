import React from 'react';
import { Switch, Route } from 'react-router';
import Listings from './Containers/Listings';
// import ListingDetail from './Components/ListingDetail';
// import Login from './Components/Login';
// import AddListing from './Components/AddListing'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            {/* <Route path="/listing/:id" component={ListingDetail} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddListing} /> */}
        </Switch>
    );
};

export default Router; 