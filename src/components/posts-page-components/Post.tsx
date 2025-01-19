import {FC} from "react";
import {IPost} from "../../models/posts-page-models/IPost.ts";


type IPostProps = {
    item: IPost;
}

const Post: FC<IPostProps> = ({item}) => {

    return (
        <div className='my-5 border-2'>
            <h3 className='font-bold text-3xl'>{item.title}</h3>
            <p className='text-2xl'> {item.body}</p>
        </div>
    );
};

export default Post;