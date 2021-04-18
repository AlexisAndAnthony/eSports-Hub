import '../styles/App.css';
import '../styles/Feed.css';
import React, { useState, useEffect } from 'react';
import ReactRoundedImage from "react-rounded-image";
import Header from './Header.js';
import axios from 'axios';

import Pic from '../resources/DefaultProfilePic.png'; // Remove later

function FeedPage(props) {
  const [posts, setPosts] = useState([]);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    getPosts()
      .then(posts => {
        setPosts(posts);
      })
      .catch(err => {
        console.log(err);
        setDisplayError(true);
      });
  }, []);

  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} /> 
      <div className="feed-container">
        <div className="feed-display">
          {!displayError
          ? (
            <FeedView posts={posts} isSignedIn={props.isSignedIn}/>
          ) 
          : (
            <p>Sorry, there was an error retrieving the latest posts.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function FeedView(props) {
  var posts = props.posts;

  return (
    <React.Fragment>
      <div className="new-post-display">
        {props.isSignedIn
        ? (
          <div>
            <p>Have something to say?</p>
            <div className="input-row">
              <TextInput />
            </div>
          </div>
        ) : (
          <p>Sign In to make a post!</p>
        )}
      </div>
      {Array.isArray(posts) && posts.map((post) => (
        <Post 
          profile_picture_url={post.profile_picture_url}
          display_name={post.display_name}
          text_content={post.text}
          post_date={post.post_date}
        />
      ))}
    </React.Fragment>
  )
}

function TextInput() {
  const [value, setValue] = useState();

  return (
    <form className="input-row">
      <label>
        <textarea 
          value={value}
          onChange={(event) => setValue(event.target.value)} 
        />
      </label>
      <input className="post-button" type="submit" value="Post"/>
    </form>
  );
}

// Retrieve list of posts from API
async function getPosts() {
  return axios.get('http://localhost:8080/api/posts')
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function getMockPosts() {
  return [
    {
      profile_picture_url: "",
      display_name: "TestUser",
      text_content: "This is my first post!",
      post_date: "April 7 2021 8:45AM"
    },
    {
      profile_picture_url: "../resources/DefaultProfilePic.png",
      display_name: "TestUser",
      text_content: "This is my second post!",
      post_date: "April 7 2021 8:46AM"
    }
  ];
}

function Post(props) {
  return (
    <div className="post">
      <div className="post-left-column">
        <div className="post-user-info">
          <ReactRoundedImage 
            image={/*props.profile_picture_url*/ Pic} // Fix later
            imageWidth="50"
            imageHeight="50"
          />
          <p>{props.display_name}</p>
        </div>
        <p className="date-display">{props.post_date}</p>
      </div>
      <div className="post-text">
        <p>{props.text_content}</p>
      </div>
    </div>
  )
}

export default FeedPage;