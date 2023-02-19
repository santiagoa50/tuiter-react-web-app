import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
           <li class="list-group-item" style="width: 85%">
                <b>Who to follow</b>
           </li>
            ${who.map(who => {
        return (WhoToFollowListItem(who))
    }).join('')}
           </ul>
        `)
}
export default WhoToFollowList;