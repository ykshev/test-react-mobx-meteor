import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import ListPage from '/imports/ui/pages/ListPage.jsx';
import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.jsx';
import AuthPageJoin from '../../ui/pages/AuthPageJoin.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

import {todosAutorun} from '/imports/ui/autorun/todos.js';
import state from '/imports/ui/store/todoStore.js';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="lists/:id" component={ListPage} onEnter={subscribe} onLeave={unSubscribe}/>
      <Route path="signin" component={AuthPageSignIn}/>
      <Route path="join" component={AuthPageJoin}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);

function subscribe(nextState) {
  state.listId = nextState.params.id;
  todosAutorun.start()
}
function unSubscribe(nextState) {
  state.listId = null;
  todosAutorun.stop()
}