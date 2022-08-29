

function loadPostData(){
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(res => res.json())
    .then(json => posting(json))
}
loadPostData()
function posting(data){
    const postArea = document.getElementById('post');
    for(const post of data){
        const postBox = document.createElement('div');
        postBox.innerHTML = `
        <h4> User - ${post.name} </h5>
        <h4> ID - ${post.id} </h5>
        <h> Email - ${post.email} </h4>
        <h4>Post - ${post.body} </h5>
        `
        postArea.appendChild(postBox);
        postBox.classList.add('post-box')





        console.log(post);
    }
    
}
