import React from 'react';
import { heart, send, message } from '../assets';

const Post = ({ nome, post, userImg }) => {
  return (
    <div className="post">
      <div className="postUser">
        <img src={userImg} alt="" />
        <p>{nome}</p>
      </div>
      <div>
        <img className="postPrincipal" src={post} alt="" />
        <div className="postInteractions">
          <img src={heart} alt="" />
          <img src={message} alt="" />
          <img src={send} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Post;
