import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';

Photo.propTypes = {
    
};

function Photo(props) {
    const match = useRouteMatch();
    console.log({match});
    
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />

            <Route path={`${match.url}/add`} component={EditPage} />
            <Route path={`${match.url}/:photoId`} component={EditPage} />
            
        </Switch>
    );
}

export default Photo;