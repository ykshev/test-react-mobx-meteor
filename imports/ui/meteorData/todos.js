import state from '../store/todoStore';
import {Lists} from '/imports/api/lists/lists.js';
import {Todos} from '/imports/api/todos/todos.js';
import { Meteor } from 'meteor/meteor';
import autorun from 'meteor/space:tracker-mobx-autorun';

export default () => {
  const todosHandle = Meteor.subscribe('todos.inList', state.listId);
  state.loading = !todosHandle.ready();
  if (!state.loading) {
    state.list = Lists.findOne(state.listId);
    state.listExists = !state.loading && !!state.list;
    state.todos = Todos.find({listId: state.listId}, {sort: {createdAt: -1}}).fetch();
  }
};

