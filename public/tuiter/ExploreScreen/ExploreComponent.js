import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="d-flex flex-row">
                       <!-- search field and cog -->
                        <input  type="text" id="search-bar" placeholder="&#xF002;    Search Twitter" style="font-family: Arial, FontAwesome,serif" class="text-black"> 
                        <a href="../explore/explore-settings.html" style="float:right"><span id="gear">&#9881;</span> 
           </div>
            
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                            <a class="nav-link active" href="../explore/for-you.html">For You</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../explore/trending.html">Trending</a>
                        </li>
                        <li class="nav-item" id="news">
                            <a class="nav-link" href="../explore/news.html">News</a>
                        </li>
                        <li class="nav-item" id="sports">
                                <a class="nav-link" href="../explore/sports.html">Sports</a>
                        </li>
                        <li class="nav-item" id="entertainment">
                            <a class="nav-link" href="../explore/entertainment.html">Entertainment</a>
                        </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative" style="padding-bottom: 8px">
            <img src="../../images/ship.jpg" class="col-sm-12">
            
       <div class="position-absolute bottom-0">
            <h2 class="fw-bold ms-2" style="color: #303030">SpaceX's Starship</h2>
        </div>
        </div>
        
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
