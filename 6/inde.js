let someDiv = document.getElementById("hw4");
let JSONobj = fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => {
    const object = response.json();
    return object
})
.then((data)=>{
    for(key in data) {
        if (data[key].userId ==1){
    someDiv.innerHTML += `<div class="posts"><span>userId: ${data[key].userId}</span><span>Id: ${data[key].id}</span><span>title: ${data[key].title}</span><span>body:${data[key].body}</span></div>`}
    } 
});