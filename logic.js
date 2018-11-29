const Tweeter  = function () {
    let _postID = 2
    let _commentID = 6
    

    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];
    
    const addPost  = text => {
        _postID ++;
        let NewPostText = text ; 
        let NewPostId = "p"+(_postID);
        posts.unshift({ 
            text: NewPostText,
            id : NewPostId,
            comments : [],
        })
      

    };

    const removePost  = postsId => {
        for (let i in posts){
            if(posts[i].id === postsId) {
                posts.splice(i,1);
                console.log(posts)
                console.log("removePost")

            }
        }
    };

    const addComment = (postId, textComment) => {
        let NewCommentText = textComment ; 
        _commentID ++;
        let NewCommentId = `c${(_commentID)}`
        for (let i in posts){
            if(posts[i].id == postId) {
                posts[i].comments.push({
                    id : NewCommentId,
                    text : NewCommentText,
                    })
                console.log(posts)
                console.log("addComment")

            }
        }
    };

    const removeComment  = (postsId ,commentID) => {
        for (let i in posts){
            if(posts[i].id === postsId) {
                for (let c in posts[i].comments) {
                    if(posts[i].comments[c].id === commentID) {
                        posts[i].comments.splice(c,1);
                        console.log(posts);
                        console.log("removeComment")
                    }
                }
            }   
        }
    };

    const getPosts = () => posts
        

    return {
        addPost: addPost,
        removePost: removePost,
        addComment : addComment,
        removeComment :removeComment,
        getPosts : getPosts
    };
}

// const mytweeter = Tweeter()
// mytweeter.addPost("post3")
// mytweeter.addPost("post4")
// mytweeter.addPost("post5")
// mytweeter.removePost("p1")
// mytweeter.removePost("p2")
// mytweeter.removePost("p5")
// mytweeter.addComment("p1", "mamamamamama")
// mytweeter.addComment("p3", "mamamamamama")
// mytweeter.removeComment("p2","c4")
// mytweeter.removeComment("p1","c2")
// // console.log(tweeter.getPosts())




// // const sumComments = (sum) => {
// //     for (let indexPosts in this.posts){
// //             for (let i = 0; i > posts[indexPosts].comments.length ; i++) {
// //                 sum ++ ;
// //             }
// //         }
// //     return sum
// // }