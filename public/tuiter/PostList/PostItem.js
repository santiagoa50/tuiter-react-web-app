const PostItem = (post) => {
    return(`

       <li class="list-group-item" style="background-color: black">
       <p style="float: right" id="dots"> 
                ...
                </p>
            <div class="row d-flex ms-auto">
                
                <div class="col-1">
                <img src=${post.userPicture} id="userPicture"/>
                    </div>
                <div class="col-11">
                    <div>
                    <span class="fw-bolder">${post.userName} </span> <i class="fa-solid fa-circle-check"></i>
                    <span class="text-secondary"> ${post.handle} - ${post.time}</span></div>
                    <div class="mb-1">${post.topic}
                    </div>
                    <div>                
                    <img src=${post.image} id="articleImage"/>
                
                     ${post.articleTitle} <br>
                     <span id="article-text" >${post.articleText} <br>
                   ${post.website}
                    </span>
                    </div>
                    
              
                    <div class="row d-flex">
                    <div class="col-3"> <i class="fa-regular fa-comment" id="comment-shape"></i><b id="comment"> ${post.comment}</b></div>
                    <div class="col-3"><i class="fa-solid fa-retweet" id="retweet-shape"> </i> <b id="retweet"> ${post.retweet}</b></div>
                    <div class="col-3"> <i class="fa-regular fa-heart" id="heart-shape"> </i> <b id="like"> ${post.like}</b></div>
                    <div class="col-3"> <i class="fa-solid fa-arrow-up-from-bracket" id="share-shape"></i> </i> </div>
                    </div>
                </div>
            </div>
       </li>
       
   `);
}
export default PostItem;