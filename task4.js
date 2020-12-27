for (let i = 0; i<=9; i++) {
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => console.log(data[i].name))
}