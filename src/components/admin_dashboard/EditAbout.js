import React from "react";
import axios from "axios";
import AboutForm from "./aboutEditForm";

class AboutEdit extends React.Component {
  constructor(props) {
    super(props);
    this.updateAbout = this.updateAbout.bind(this);
    console.log(this.props);
  }
  async updateAbout(updatedAbout, history) {
    try {
      await axios.put(
        process.env.REACT_APP_BACKEND_URL +
          `/admin_about/update/${this.props.match.params.id}`,
        updatedAbout
      );
      this.props.history.push("/about");
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
        <h1>Edit About and Doctor Information</h1>
        <AboutForm onSubmit={this.updateAbout} />
      </>
    );
  }
}

export default AboutEdit;