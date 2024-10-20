
import { useDispatch } from 'react-redux';
import { useFetchPostsQuery } from '../features/posts/postsApiSlice';
import Post from './Post';
import { removeLane } from '../features/lanes/lanesSlice';

const Lane = ({ subreddit }) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchPostsQuery(subreddit);
  
  const handleRemove = () => {
    dispatch(removeLane(subreddit));
  };

  if (isLoading) return <div>Loading {subreddit}...</div>;
  if (error) return <div>Error loading {subreddit}. <span onClick={handleRemove}>❌</span></div>;

  return (
    <div className="lane">
      <div className="lane-header">
        <h2>{subreddit}</h2>
        <button className='btn' onClick={handleRemove}>Remove</button>
      </div>
      <div className="posts-container">
        {data?.data?.children.map((post) => (
          <Post key={post.data.id} post={post.data} />
        ))}
      </div>
    </div>
  );
};

export default Lane;
