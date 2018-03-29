function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_H10fbyO9M/';
    const USERNAME = 'vasil';
    const PASSWORD = 'vasil';
    const BASE64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {Authorization: 'Basic ' + BASE64};

    let posts = {};

    $('#btnLoadPosts').on('click', seeAllPosts);
    $('#btnViewPost').on('click', viewPost);

    function seeAllPosts() {
        $('#posts').empty();
        $.ajax({
            method: 'GET',
            url: URL + 'posts',
            headers: AUTH
        }).then(function (res) {
            for (let post of res) {
                $('#posts').append($(`<option value="${post._id}">${post.title}</option>`));
                posts[post._id] = post.body;
        }

        }).catch(function (err) {
            console.log(err);
        })
    }
    
    function viewPost() {
        let postId = $('#posts').val();
        let postTitle = $('#posts').find('option:selected').text();
        $('#post-comments').empty();

        $('#post-title').text(postTitle);
        $('#post-body').text(posts[postId])
        $.ajax({
            method: 'GET',
            url: URL + `comments/?query={"post_id":"${postId}"}`,
            headers: AUTH
        }).then(function (res) {
            for (let com of res) {
                $('#post-comments').append($(`<li>${com.text}</li>`));

            }
        }).catch(function (err) {
            console.log(err);
        })
    }

}