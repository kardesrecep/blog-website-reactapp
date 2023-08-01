import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="post-image"
        src="https://images.pexels.com/photos/6662900/pexels-photo-6662900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">&</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro libero
          corrupti assumend
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, excepturi
        culpa dolorem non labore possimus ducimus repudiandae, ad iusto
        reiciendis laudantium beatae blanditiis nobis  amet consectetur adipisicing elit. A, excepturi
        culpa dolorem non labore possimus ducimus repudiandae, ad iusto
        reiciendis laudantium beatae blanditiis nobis  amet consectetur adipisicing elit. A, excepturi
        culpa dolorem non labore possimus ducimus repudiandae, ad iusto
        reiciendis laudantium beatae blanditiis nobis  amet consectetur adipisicing elit. A, excepturi
        culpa dolorem non labore possimus ducimus repudiandae, ad iusto
        reiciendis laudantium beatae blanditiis nobis necessitatibus nemo!
        Nesciunt odio illum omnis.
      </p>
    </div>
  );
};

export default Post;
