import React from 'react';
import { Switch, Route } from 'react-router';
import Listings from './Containers/Listings';
import Login from './Containers/Login';
// import ListingDetail from './Components/ListingDetail';
// import Login from './Components/Login';
// import AddListing from './Components/AddListing'

// const checkAuth = () => {
//     const cookies = cookie.parse(document.cookie)
//     return cookies["loggedIn"] ? true : false
// }

// const ProtectedRoute = ({component: Component, ...rest}) => {
//     return (
//         <Route
//         {...rest}
//         render={(props) => checkAuth()
//             ? <Component {...props} />
//             : <Redirect to="/login" />}
//         />
//     )
// }

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            {/* <Route path="/listing/:id" component={ListingDetail} /> */}
            <Route path="/login" component={Login} />
            {/* <ProtectedRoute path="/add" component={AddListing} /> */}
        </Switch>
    );
};

export default Router; 