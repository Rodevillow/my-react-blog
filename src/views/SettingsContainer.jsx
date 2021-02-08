import React from "react";
import { connect } from "react-redux";

import Settings from "../components/Settings";

class SettingsContainer extends React.Component {
  render() {
    return (
        <Settings />
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)