import { observable } from 'mobx';

export default observable({
  listId: null,
  loading: true,
  list: null,
  listExists: false,
  todos: [],
});