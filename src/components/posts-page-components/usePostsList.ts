import {useEffect, useState} from "react";
import {IPost} from "../../models/posts-page-models/IPost.ts";
import {getPosts} from "../../api/apiServices.ts";
import {BaseModelType} from "../../models/BaseModelType.ts";


export const usePostsList = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts
            .then(({posts}:BaseModelType) => {
                setPosts(posts);
            });
    }, [])
    return {posts}
};
