const PostItem = (posts) =>
{
    return(`
    <ul class="list-group-item">
      ${posts.topic}
      ${posts.userName}
      ${posts.time}
      ${posts.title}
      ${posts.image}
    </ul>`
    );
}

export default PostItem;