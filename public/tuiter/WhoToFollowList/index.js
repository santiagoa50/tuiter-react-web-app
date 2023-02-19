import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
           <li class="list-group-item fw-bold" style="width: 85%">
                Who to follow
           </li>
            ${who.map(who => {
        return (WhoToFollowListItem(who))
    }).join('')}
           </ul>
        `)
}
export default WhoToFollowList;