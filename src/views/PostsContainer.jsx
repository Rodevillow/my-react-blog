import React from "react";
import { connect } from "react-redux";

import Posts from "../components/Posts";

class PostsContainer extends React.Component {
  render() {
    return (
      <div>
        <Posts />
        Posts wwrapp
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // code...
  };
};

const mapDispatchToProps = {
  // code...
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
