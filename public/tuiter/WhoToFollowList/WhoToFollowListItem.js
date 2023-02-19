const WhoToFollowListItem = (who) =>
{
    return(`
    <ul class="list-group-item">
      ${who.avatarIcon}
      ${who.userName}
      ${who.handle}
    </ul>`
    );
}

export default WhoToFollowListItem;