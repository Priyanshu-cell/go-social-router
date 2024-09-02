import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span 
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
            onClick={() => deletePost(post.id)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        
        {Array.isArray(post.tags) && post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tag-div">{tag}</span>
        ))}

      </div>
      <div className="alert alert-success reaction" role="alert">
        This post is reacted by {post.views || 0} people.
      </div>
    </div>
  );
};

export default Post;
