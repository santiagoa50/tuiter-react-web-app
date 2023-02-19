const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
             
            <a href="#" class="list-group-item list-group-item-action"><i class="fa-solid fa-house" id="home"></i> <b id="home-text"> Home</b></a>
            <a href="#" class="list-group-item list-group-item-action active"><i class="fa-solid fa-hashtag" id="explore"></i> <b id="explore-text"> Explore</b></a>
            <a href="#" class="list-group-item list-group-item-action"><i class="fa-solid fa-bell" id="notifications"></i> <b id="notifications-text"> Notifications</b></a>
            <a href="#" class="list-group-item list-group-item-action"><i class="fa-solid fa-envelope" id="messages"></i> <b id="messages-text"> Messages</b></a>
            <a href="#" class="list-group-item list-group-item-action"><i class="fa-solid fa-bookmark" id="bookmarks"></i> <b id="bookmark-text"> Bookmarks</b></a>
            <a href="#" class="list-group-item list-group-item-action"><i class="fa-solid fa-list" id="lists"></i> <b id="lists-text"> Lists</b></a>
            <a href="#" class="list-group-item list-group-item-action"><i class="fa-solid fa-user" id="profile"></i> <b id="profile-text"> Profile</b></a>
            <a href="#" class="list-group-item list-group-item-action"><i class="fa-solid fa-comment-dots" id="more"></i> <b id="more-text"> More</b></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;