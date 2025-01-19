import Post from "./Post.tsx";
import {usePostsList} from "./usePostsList.ts";


const PostsList = () => {
    const {posts} = usePostsList()
    // const [posts, setPosts] = useState<IPost[]>([]);
    // useEffect(() => {
    //     getPosts
    //         .then(post => {
    //             setPosts(post);
    //         });
    // }, [])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} item={post}/>)
            }
        </div>
    );
};

export default PostsList;