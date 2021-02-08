import React from "react";
import { connect } from "react-redux";

import Post from "../components/Post";

class PostContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    console.log("=-=-=-=-=-=-=-=-=-=");
    console.log("Get url param inside componentDidMount");
    console.log(id);
    console.log("=-=-=-=-=-=-=-=-=-=");
  }

  render() {
    const id = this.props.match.params.id;

    console.log("=-=-=-=-=-=-=-=-=-=");
    console.log("Get url param inside render");
    console.log(id);
    console.log("=-=-=-=-=-=-=-=-=-=");

    return <Post postId={id} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
