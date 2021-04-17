import '../styles/App.css';
import '../styles/Feed.css';
import { useState } from 'react';
import Header from './Header.js';

function FeedPage(props) {
  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} /> 
      <div className="feed-display">
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
        {getPosts().map((post) => (
          <Post 
            profile_picture_url={post.profile_picture_url}
            display_name={post.display_name}
            text_content={post.text_content}
            post_date={post.post_date}
          />
        ))}
      </div>
    </div>
  );
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

// Placeholder for function that calls API
function getPosts() {
  return [
    {
      profile_picture_url: "",
      display_name: "TestUser",
      text_content: "This is my first post!",
      post_date: "April 7 2021 8:45AM"
    },
    {
      profile_picture_url: "",
      display_name: "TestUser",
      text_content: "This is my second post!",
      post_date: "April 7 2021 8:46AM"
    }
  ];
}

function Post(props) {
  return (
    <div className="post">
      <div className="post-user-info">
        <img src={props.profile_picture_url} alt=""/>
        <p>{props.display_name}</p>
      </div>
      <p>{props.text_content}</p>
      <p>{props.post_date}</p>
    </div>
  )
}

export default FeedPage;