import React from "react";
import axios from "axios";

class UserAppointments extends React.Component {
  state = {
    appointments: null
  }

  componentDidMount() {
    let token = sessionStorage.getItem('token');
    if (token) {
    try { axios.get(process.env.REACT_APP_BACKEND_URL + "/appointments/user_appointments", { headers: {'Authorization': token } })
    .then((response) => {
      console.log(response.data)
      let appointments = response.data;
      if (appointments.length > 0)
        {
        this.setState({appointments: appointments});
      }

      })
    } catch(err) {
      this.setState({errors: err.message})
      console.log(err.message)
      }
    }
  }

  cancelAppointment(id) {
    axios.patch(process.env.REACT_APP_BACKEND_URL + `/appointments/${id}`).then((response) => {
      alert(response.data.msg);
      window.location.reload(false);
    }).catch((err) => {
      console.log(err)
      alert(`An error occurred: ${err}` )
    })
  }

  renderAppointments() {
    let appointmentsList = this.state.appointments;
    console.log(appointmentsList)
    if (appointmentsList === null) {
      return (
      <div className="booking-card">
        <h3>You have no appointments scheduled</h3>
      </div>
      )
    } else {
      return appointmentsList.map((appointment, i) => {
        return (
          <div key={i} className="booking-card">
            <h3>{appointment.dateTime}</h3>
            <h5>Your Comments for this appointment:</h5>
            <p>{appointment.comment}</p>
            <button onClick={() => { this.cancelAppointment(appointment._id) }}>Cancel</button>
          </div>
        )
      })
    }
  }

  render() {
    return(
      this.renderAppointments()
    )
  }
}


export default UserAppointments