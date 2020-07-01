import { User } from './model/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'newName'});

console.log(user.get('name'));
console.log(user.get('age'));
