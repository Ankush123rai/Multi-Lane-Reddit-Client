
const Post = ({ post }) => {
  // Check if the post has a valid image URL
  const imageUrl = post.preview?.images?.[0]?.source?.url || post.thumbnail;

  return (
    <div className="post">
    
      <h4>{post.title}</h4>
      <p>By {post.author}</p>
      <p><span>{post.ups} upvotes</span> | <span>{post.num_comments} comments</span></p>
{/*       
      {imageUrl && (
        <div className="post-image">
          <img src={imageUrl} alt={post.title} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )} */}

      <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">
        View on Reddit
      </a>
    </div>
  );
};

export default Post;
