const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

// tweeter.addPost("post3")
// tweeter.addPost("post4")
// tweeter.addPost("post5")

renderer.renderPosts(tweeter.getPosts())

const post = () => {
    let input = $('#input').val()
    tweeter.addPost(input)
    renderer.renderPosts(tweeter.getPosts())
}



$("#posts").on("click", ".delete-post",function() {
    let remove = $(this).closest("div").attr('id')
    tweeter.removePost(remove)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete-comment",function() {
    let removeC = $(this).closest("p").data().id
    let removeP = $(this).closest("div").attr('id')
    tweeter.removeComment(removeP,removeC)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", "button",function() {
    let input = $(this).siblings("input").val()
    let postId = $(this).closest("div").attr('id')
    console.log(postId,input)
    tweeter.addComment(postId,input)
    renderer.renderPosts(tweeter.getPosts())
})