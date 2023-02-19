import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const PostSummaryList = () => {
    return (`
         <ul class="list-group">
           <!-- continue here -->
           <!--
                ${
        posts.map(who => {

            return(PostSummaryItem(who));
        }).join('')

    }            
    </ul> -->
    
    
     <ul class="list-group" id="tweets" style="width: 100%">
                    
                    <li class="list-group-item"><img src="../../images/reactjs.jpg" id="reactjs"/>
                        Web Development<br>
                        <b>ReactJS <i class="fa-solid fa-circle-check"></i></b> - 2h<br>
                        <b>React.js is a component based front end library that makes it very
                        easy to build Single Page Applications or SPAs</b>

                    </li>
                    <li class="list-group-item"><img src="../../images/javascript.png" id="javascript"/>
                        <b>JavaScript <i class="fa-solid fa-circle-check"></i></b> - 2h<br>
                        <b>JavaScript is programming language that can run on browsers as well as desktops</b><br>
                        123k Tuits
                    </li>
                    <li class="list-group-item"><img src="../../images/jquery.png" id="jquery"/>
                        Web Development <br>
                        <b>jQuery</b><br>
                        123k Tuits

                    </li>
                    <li class="list-group-item"><img src="../../images/nodejs.png" id="nodejs"/>
                        Web Development <br>
                        <b>NodeJS <i class="fa-solid fa-circle-check"></i></b> - 2h<br>
                        123k Tuits

                    </li>

                </ul>
                
    
`); }


export default PostSummaryList;