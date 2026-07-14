import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddVehicle = () => {

    const [input, changeInput] = useState(
        {
            "bookingId": "",
            "ownerName": "",
            "email": "",
            "phone": "",
            "vehicleRegistrationNumber": "",
            "vehicleBrand": "",
            "vehicleModel": "",
            "batteryCapacity": "",
            "connectorType": "",
            "chargingDate": "",
            "timeSlot": "",
            "estimatedUnits": "",
            "chargingBayNumber": ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-vehicle", input).then(

            (response) => {
                console.log(response.data)
                alert("EV added successfully!")
            }

        ).catch(
            (err) => (
                console.error("Error Adding EV", err)
            )
        )
    }
    return (
        <div>

            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Booking ID</label>
                                <input type="text" className="form-control" name='bookingId' onChange={inputHandler} value={input.bookingId} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Owner Name</label>
                                <input type="text" className="form-control" name='ownerName' onChange={inputHandler} value={input.ownerName} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' onChange={inputHandler} value={input.email} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name='phone' onChange={inputHandler} value={input.phone} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Vehicle Registration Number</label>
                                <input type="text" className="form-control" name='vehicleRegistrationNumber' onChange={inputHandler} value={input.vehicleRegistrationNumber} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Vehicle Brand</label>
                                <input type="text" className="form-control" name='vehicleBrand' onChange={inputHandler} value={input.vehicleBrand} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Vehicle Model</label>
                                <input type="text" className="form-control" name='vehicleModel' onChange={inputHandler} value={input.vehicleModel} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Battery Capacity (kWh)</label>
                                <input type="number" step="0.01" className="form-control" name='batteryCapacity' onChange={inputHandler} value={input.batteryCapacity} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Connector Type</label>
                                <input type="text" className="form-control" name='connectorType' onChange={inputHandler} value={input.connectorType} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Charging Date</label>
                                <input type="date" className="form-control" name='chargingDate' onChange={inputHandler} value={input.chargingDate} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Time Slot</label>
                                <input type="text" className="form-control" name='timeSlot' onChange={inputHandler} value={input.timeSlot} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Estimated Units (kWh)</label>
                                <input type="number" step="0.01" className="form-control" name='estimatedUnits' onChange={inputHandler} value={input.estimatedUnits} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Charging Bay Number</label>
                                <input type="text" className="form-control" name='chargingBayNumber' onChange={inputHandler} value={input.chargingBayNumber} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddVehicle