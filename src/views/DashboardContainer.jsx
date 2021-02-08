import React from "react";
import { connect } from "react-redux";

import Dashboard from "../components/Dashboard";

class DashboardContainer extends React.Component {
  render() {
    return (
        <Dashboard />
    );
  }
}

const mapStateToProps = state => {
    return {
        // code...
    };
}

const mapDispatchToProps = {
    // code...
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)