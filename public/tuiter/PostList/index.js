import PostItem from './PostItem.js';
import posts from '../PostList/posts.js';


const PostList = () => {
        return (`
            <ul class='list-group'>
            ${posts.map(post => {
                return (PostItem(post))
        }).join('')}
    </ul>
    `)
}
export default PostList;