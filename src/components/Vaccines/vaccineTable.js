import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class VaccineTable extends React.Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/vaccines"
    );
    const data = await response.json();
    this.setState({
      data: data
    });
  }

  render() {
    const { data } = this.state;

    function deleteVaccine(id) {
      axios
        .delete(process.env.REACT_APP_BACKEND_URL + `/vaccines/delete/${id}`)
        .then(response => {
          window.location.replace("/admin_vaccines");
        });
    }
    return (
      <>
        <h1>Current Vaccines:</h1>
        {data
          ? data.map((vaccine, index) => {
              return (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Manufacturer</th>
                      <th>Image</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>{vaccine.brand}</td>
                    <td>{vaccine.description}</td>
                    <td>{vaccine.manufacturer}</td>
                    <td>
                      <img src={vaccine.imageUrl} />
                    </td>
                    <td>
                      {" "}
                      <Link to={"/vaccine/edit/" + vaccine._id}>
                        <button>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteVaccine(vaccine._id);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </table>
              );
            })
          : null}
      </>
    );
  }
}

export default VaccineTable;