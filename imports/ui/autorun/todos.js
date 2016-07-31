import autorun from 'meteor/space:tracker-mobx-autorun';
import todos from '/imports/ui/meteorData/todos.js';

export const todosAutorun = autorun(todos);
