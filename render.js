const Renderer  = function () {

    let renderPosts = (posts) => {

        let emptyPosts = () => $("#posts").empty()
        emptyPosts()
        console.log(posts)
        for (let i of posts){
            let addPost = `<h1 class="post-text"><span class="delete-post">X</span>${i.text}</h1>`
            let intupComment = `<input type="text" placeholder="Write some comments">`
            let addComment = `<button type="button">Add</button>`
            let comment = ""
            console.log(i.id)
            
            for (let c of i.comments){
                comment += `<p data-id="${c.id}" class="comments"><span class="delete-comment">X</span>${c.text}</p>`
                console.log(c.id)
            }
            $("#posts").append(`<div class="posts post" class="box" id="${i.id}">
                                ${addPost}${comment}${intupComment}${addComment}
                                </div>`)
        }
    }
    return { renderPosts : renderPosts }
}



// onclick="remove()" 
// onclick="remove()" 
















// const Renderer  = function () {
//     let renderPosts = (posts) ;

//     let emptyPosts = () => $("#posts").empty()
//     emptyPosts()

//     let viewPosts = () => {
//         for (let i = 0; i > renderPosts[i].length ; i++){  
//             $("#posts").append(`<div id="post" onclick="post()" class="post${i}">${postsList[i].t}</div>`)
//         }
//     }


// return renderPosts 
// }


