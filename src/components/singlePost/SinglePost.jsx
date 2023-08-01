import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>K@rdes</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus
          ad nostrum quam earum itaque harum saepe iure laboriosam odit sunt
          cumque quaerat sequi dolorem, eum a alias consequatur eveniet.
          Cupiditate, voluptates optio. Accusamus in iusto, ratione asperiores
          fugit, repellat nam eveniet autem ipsa, sunt voluptas doloremque! Id
          odio, nihil veniam quis aliquam harum vitae laudantium natus nisi
          provident tempora! Quia autem a voluptatibusolorem, eum a alias consequatur eveniet.
          Cupiditate, voluptates optio. Accusamus in iusto, ratione asperiores
          fugit, repellat nam eveniet autem ipsa, sunt voluptas doloremque! Id
          odio, nihil veniam quis aliquam harum vitae laudantium natus nisi
          provident tempora! Quia autem a voluptatibusolorem, eum a alias consequatur eveniet.
          Cupiditate, voluptates optio. Accusamus in iusto, ratione asperiores
          fugit, repellat nam eveniet autem ipsa, sunt voluptas doloremque! Id
          odio, nihil veniam quis aliquam harum vitae laudantium natus nisi
          provident tempora! Quia autem a voluptatibusolorem, eum a alias consequatur eveniet.
          Cupiditate, voluptates optio. Accusamus in iusto, ratione asperiores
          fugit, repellat nam eveniet autem ipsa, sunt voluptas doloremque! Id
          odio, nihil veniam quis aliquam harum vitae laudantium natus nisi
          provident tempora! Quia autem a voluptatibus, aliquid eligendi, quos
          nulla consequuntur dolor cumque vero labore dolorum ipsa, quasi iste
          ut laboriosam veritatis doloremque! Officia dicta quo magni,
          temporibus id dolorem maxime quis?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
