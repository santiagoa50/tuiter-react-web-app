import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
import PostItem from "./PostItem.js";


const PostSummaryList = () => {
    return (`
         <ul class="list-group">
           <!-- continue here -->
           <!--
                ${
        posts.map(who => {

            return(PostItem(who));
        }).join('')

    }            
    </ul> -->
   <ul class="list-group" id="tweets" style="width: 100%">
                    
                    <li class="list-group-item" style="background-color: black"><img src="../../images/elon.webp" id="elon"/>
                    <p style="float: right">
                        ...
                    </p>
                        <b>&nbsp;&nbsp;Elon Musk <i class="fa-solid fa-circle-check"></i></b> - 2h<br>
                        &nbsp; Amazing show about <a href="#" style="text-decoration: none">@inspiration4</a> mission!
                        
                        <img src="../../images/inspiration.jpeg" id="inspiration">
                        
                        
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