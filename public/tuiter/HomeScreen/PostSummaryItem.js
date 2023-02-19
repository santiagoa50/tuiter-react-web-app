const PostSummaryItem = (post) =>
{
    return(`
    <ul class="list-group-item">
      ${post.topic}
      ${post.userName}
      ${post.time}
      ${post.title}
      ${post.image}
    </ul>`
    );
}

export default PostSummaryItem;