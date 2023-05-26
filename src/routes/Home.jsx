import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { postMedia } from '../constants';

const Home = () => {
  return (
    <div>
      <section className="section-container">
        <h1>Home Page</h1>
        {postMedia.map((post) => (
          <Post
            key={post.id}
            post={post.post}
            nome={post.nome}
            userImg={post.userImg}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
