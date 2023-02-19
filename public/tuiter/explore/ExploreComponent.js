import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row ">
                       <!-- search field and cog -->
                        <input  type="text" id="search-bar" placeholder="&#xF002;    Search Tuiter" style="font-family: Arial, FontAwesome,serif"> 
                        <a href="explore-settings.html" style="float:right"><span id="gear">&#9881;</span> 
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                            <a class="nav-link active" href="for-you.html">For You</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item" id="news">
                            <a class="nav-link" href="news.html">News</a>
                        </li>
                        <li class="nav-item" id="sports">
                                <a class="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item" id="entertainment">
                            <a class="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
           </ul>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
