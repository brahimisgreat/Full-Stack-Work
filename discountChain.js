const users = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Wayne' },
    { id: 2, name: 'David' },
];

const names = users.map(function (user) {
    return user.name;
});

console.log(names)