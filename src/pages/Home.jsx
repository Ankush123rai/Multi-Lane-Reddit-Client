import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLane, clearError } from "../features/lanes/lanesSlice";
import Lane from "../components/Lane";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [subreddit, setSubreddit] = useState("");
  const dispatch = useDispatch();
  const { subreddits, error } = useSelector((state) => state.lanes);

  const handleAddLane = () => {
    if (subreddit) {
      dispatch(addLane(subreddit));
      setSubreddit("");
    }
  };

  return (
    <div className="home">
      <div className="header">
        <div className="logo">
          <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Reddit-Emblema.png" />
            <p>Multi-Lane Reddit Client</p>
        </div>
        <div className="search-container">
        <input
          type="text"
          placeholder="Enter subreddit"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
        <button className="btn" onClick={handleAddLane}>Add Lane</button>
        </div>
      </div>

      {error && (
        <ErrorMessage
          message={error}
          clearError={() => dispatch(clearError())}
        />
      )}

      <div className="lanes-container">
        {subreddits.map((sub) => (
          <Lane key={sub} subreddit={sub} />
        ))}
      </div>
    </div>
  );
};

export default Home;
