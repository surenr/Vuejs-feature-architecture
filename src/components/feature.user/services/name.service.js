import * as uuid from 'uuid/v4';

let userList = [
  {
    id: uuid(),
    name: 'Suren Rodrigo',
    description: 'Suren Rodrigo is a 99X Technology employee',
  },
  {
    id: uuid(),
    name: 'Dinuka Rodrigo',
    description: 'Dinuka Rodrigo is the wife of Suren',
  },
  {
    id: uuid(),
    name: 'Kamal Perera',
    description: 'Kamal Perera is a fictional character',
  },
];

export function addUser(name, description) {
  userList = [...userList, {
    id: uuid(),
    name,
    description,
  }];
}

export function getAllUsers() {
  return userList;
}

export function updateUser(id, updatedName, updatedDescription) {
  const otherUsers = userList.filter((user => user.id !== id));
  userList = [...otherUsers, {
    id,
    name: updatedName,
    description: updatedDescription,
  }];
}

export function removeUser(id) {
  userList = [...userList.filter(user => user.id !== id)];
}
