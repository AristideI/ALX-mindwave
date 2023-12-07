import { useState } from "react";

export default function Feeds() {
  const [postData, setPostData] = useState({ post: "", mood: "" });
  console.log(postData);
  function handleFormChange(e) {
    setPostData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handlePosting() {}
  return (
    <article>
      <section className="p-12 flex gap-4 w-full border-b border-light-200">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="./public/sample.jpg"
          alt=""
        />
        <form className="w-full">
          <input
            className="placeholder:text-xl text-light-200 bg-transparent py-2 w-full active:bg-transparent focus:bg-transparent outline-none"
            type="text"
            placeholder="What's on your mind today ?"
            name="post"
            value={postData.post}
            onChange={(e) => handleFormChange(e)}
          />
          <div className="w-full flex justify-between items-center mt-4">
            <select
              name="mood"
              className="bg-transparent px-4 py-2 border rounded-lg"
              onChange={(e) => handleFormChange(e)}
            >
              <option value="">Whats Your Mood today ?</option>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="depressed">Worried</option>
              <option value="worried">Worried</option>
            </select>
            <button
              className="bg-dark-100 px-8 py-2 text-dark-200 text-xl font-semibold"
              onClick={(e) => {
                e.preventDefault();
                handlePosting;
              }}
            >
              Post
            </button>
          </div>
        </form>
      </section>
      <section></section>
    </article>
  );
}
