const WhoToFollowListItem = (who) =>
{
    return(`
    <li>
      ${who.avatarIcon}
      ${who.userName}
      ${who.handle}
    </li>`
    );
}

export default WhoToFollowListItem;