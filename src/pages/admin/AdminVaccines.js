import React from "react";
import axios from "axios";
import VaccineForm from "../../components/Vaccines/VaccineForm";
import VaccineTable from "../../components/Vaccines/vaccineTable";

import "../../css/adminServices.css";

class AdminVaccines extends React.Component {
  submit(vaccineData) {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/vaccines/create", vaccineData)
      .then(res => {
        window.location.replace("/admin_vaccines");
      })
      .catch(error => {
        console.log("There was an error!" + error);
      });
  }

  render() {
    return (
      <>
        <div className="grid">
          <div className="table-cont">
            <VaccineTable />
          </div>
          <div className="content-create">
            <h1>Create New Vaccine:</h1>
            <VaccineForm onSubmit={this.submit} {...this.props} />
            <div></div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminVaccines;