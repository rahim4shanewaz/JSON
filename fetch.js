function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}




function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(json => console.log(json));
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => displayUsers(json));
}
function displayUsers(users){
    console.log(users);
    const ul = document.getElementById('ul');
   for(const user of users){
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
   }

    
}