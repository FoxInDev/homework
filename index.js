import Task from './task.js';
import User from './user.js';

const task = new Task('test1');
const user = new User(task);

console.log(user.do());