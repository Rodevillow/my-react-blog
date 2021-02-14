import React, { useState } from "react";
import { connect } from "react-redux";
import { homeGetPosts } from "../store/home/actions";

function Home(props) {

  const [counterState, setCounterState] = useState(0);

  function increment() {
    setCounterState(counterState + 1);
  }

  function decrement() {
    setCounterState(counterState - 1);
  }

  function doGetPosts() {
    console.log('doGetPosts');

    const posts = [
      {
        id: 1,
        title: 'Kopqls'
      },
      {
        id: 5,
        title: 'ASjdas'
      },
      {
        id: 14,
        title: 'ZVNvnz'
      },
    ];

    props.homeGetPosts(posts);
  }

  function doClearPosts() {
    console.log('doClearPosts');
    props.homeGetPosts([]);
  }

  return (
    <div className="Home">
      <h1>Counter {counterState}</h1>
      <div>
        <button className="btn btn__default" onClick={decrement}>-</button>
        <button className="btn btn__default" onClick={increment}>+</button>
      </div>

      <hr/>

      <div>
        <button onClick={doGetPosts} className="btn btn__info">GET POSTS</button>
        <button onClick={doClearPosts} className="btn btn__info">CLEAR POSTS</button>
      </div>

      <pre>
        { JSON.stringify(props.posts, null, 2) }
      </pre>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.home.posts
  }
}


const mapDispatchToProps = {
  homeGetPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
