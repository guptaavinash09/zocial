import React, { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";
import StoryBar from "../components/StoryBar";
function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFeed = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* Story and post */}
      <div>
        <StoryBar />
        <div>List of posts</div>
      </div>

      {/* right side bar */}
      <div>
        <div>
          <h1>Sponsered</h1>
        </div>

        <div>
          <h1>Mesaages</h1>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Feed;
