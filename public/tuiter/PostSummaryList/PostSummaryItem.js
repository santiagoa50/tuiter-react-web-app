const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item" id="postSummaryItems">
         <div class="row">
           <div class="col-9">
               <div class="text-secondary">${post.topic}</div>
                <div class="d-flex" style="align-items: center">
                      <div class="fw-bold">${post.userName}</div><i class="fa fa-check-circle ms-1"></i>
                      <div class="text-secondary ms-1">- ${post.time}</div>
                            </div>
                            <div class="fw-bold">${post.title}</div>
                        </div>
                        <div class="col-3">
                            <img src=${post.image} id="postSummaryImages"/>
                        </div>
                    </div>
                </li>
    `);
}
export default PostSummaryItem;