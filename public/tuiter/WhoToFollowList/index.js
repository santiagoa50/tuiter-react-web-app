import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
           
                ${
            who.map(who => {
                
                return(WhoToFollowListItem(who));
            }).join('')
        
    }
                <li class="list-group-item"><b>Who to follow</b></li>
                    <li class="list-group-item">
                        <img src="../../images/java.png" id="java" alt="JAVA"/>
                        <button class="button">Follow</button>
                        <b>Java <i class="fa-solid fa-circle-check"></i></b> <br>
                        @Java

                    </li>
                    <li class="list-group-item">
                        <img src="../../images/relativity-space.png" id="relativity-space" alt="RELATIVITY-SPACE"/>
                        <button class="button">Follow</button>
                        <b>Relativity Space <i class="fa-solid fa-circle-check"></i></b> <br>
                       @relativityspace

                    </li>

                    <li class="list-group-item">
                        <img src="../../images/virgin-galactic.png" id="virgin-galactic" alt="VIRGIN-GALACTIC"/>
                        <button class="button">Follow</button>
                        <b>Virgin Galactic <i class="fa-solid fa-circle-check"></i></b> <br>
                        @virgingalactic
                    </li>
                    <li class="list-group-item">
                        <img src="../../images/nasa.png" id="nasa" alt="NASA"/>
                        <button class="button">Follow</button>
                        <b>NASA <i class="fa-solid fa-circle-check"></i></b> <br>
                        @NASA
                    </li>
                    <li class="list-group-item">
                        <img src="../../images/tesla.png" id="tesla" alt="TESLA"/>
                        <button class="button">Follow</button>
                        <b>Tesla <i class="fa-solid fa-circle-check"></i></b> <br>
                        @Tesla
                    </li>
    </ul>
`); }

export default WhoToFollowList;