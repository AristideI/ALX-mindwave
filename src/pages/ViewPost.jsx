import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../assets/Spinner";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function ViewPost() {
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState();
  console.log(currentPost);

  const [isliked, setIsLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(Math.ceil(Math.random() * 15));

  function handleLiking() {
    if (isliked) {
      setPostLikes((prev) => (prev -= 1));
      setIsLiked(false);
    } else {
      setPostLikes((prev) => (prev += 1));
      setIsLiked(true);
    }
  }

  console.log(currentPost);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://mind-wave.onrender.com/post");
      const posts = await response.json();
      const post = posts.find((post) => post._id === id);
      setCurrentPost(post);
    }
    getData();
  }, []);

  return !currentPost ? (
    <Spinner />
  ) : (
    <article>
      <article className="flex justify-start gap-6 border-b border-light-200 py-6">
        <img
          className="w-12 h-12 md:w-10 md:h-10 rounded-full"
          src={currentPost.authorImg}
          alt=""
        />
        <section className="w-4/5 flex flex-col gap-4">
          <p className="font-bold">@{currentPost.username.replace(" ", "")}</p>
          <p>{currentPost.text}</p>
          <img
            className="w-full h-60 object-cover"
            src={currentPost.image}
            alt="post image"
          />
          <div className="flex items-center gap-16">
            <button className="flex items-center gap-2" onClick={handleLiking}>
              <img
                className="w-5 h-5"
                src={isliked ? "/liked.png" : "/like.png"}
                alt="like icon"
              />
              <p>{postLikes} Likes</p>
            </button>
            <button className="flex items-center gap-2">
              <img className="w-5 h-5" src="/comm.png" alt="like icon" />
              <p>{currentPost.commentsArr?.length} Comments</p>
            </button>
          </div>
          <p>{dayjs(currentPost.time).fromNow()}</p>
        </section>
      </article>
    </article>
  );
}
