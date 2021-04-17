import '../styles/App.css';
import '../styles/Feed.css';
import Header from './Header.js';

function FeedPage() {
  return (
    <div className="App">
      <Header /> 
      <div className="feed-display">
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