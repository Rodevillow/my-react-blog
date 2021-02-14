import React from "react";
import { connect } from "react-redux";

import Home from "../components/Home";

// class HomeContainer extends React.Component {
//   render() {
//     return (
//         <Home />
//     );
//   }
// }

const HomeContainer = () => {
  return <Home />;
};

const mapStateToProps = (state) => {
  return {
    // code...
  };
};

const mapDispatchToProps = {
  // code...
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
