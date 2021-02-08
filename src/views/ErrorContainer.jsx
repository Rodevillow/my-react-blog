import React from "react";
import { connect } from "react-redux";

import Error from "../components/Error";

class ErrorContainer extends React.Component {
  render() {
    return <Error />;
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

export default connect(mapStateToProps, mapDispatchToProps)(ErrorContainer);
