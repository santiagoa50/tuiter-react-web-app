const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item d-flex" style="width: 85%">
            <img src=${who.avatarIcon} class="rounded-circle" style="width: 45px">
            <div class="ms-3">
                <span class="fw-bold">${who.userName}</span><i class="fa-solid fa-circle-check ms-1"></i>
                <div class="text-secondary text-white">@${who.handle}</div>
            </div>
            <div class="ms-auto">
                <button type="button" class="button">Follow</button>
            </div>
        </li>
  `);
}
export default WhoToFollowListItem;