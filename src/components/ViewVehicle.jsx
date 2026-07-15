import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios';

const ViewVehicle = () => {

    const [edata, changeDate] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:3000/view-vehicle", edata).then(
            (response) => {
                changeDate(response.data)
            }).catch(
                (err) => {
                    console.error("Error fetching entries: ", err)
                }
            )
    }

    useEffect(
        () => {
            fetchData();
        }, []
    )


    return (
        <div>

            <NavigationBar />
            <div className="container-fluid mt-5 px-4">
                <div className="card shadow-sm border-0 rounded-3">
                    <div className="card-body p-0">
                        {/* Removed the table-responsive wrapper to allow the table to expand naturally */}
                        <table className="table table-hover align-middle text-center mb-0 w-100">

                            {/* Simplified header with subtle color */}
                            <thead className="table-light border-bottom">
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Owner Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Vehicle Registration Number</th>
                                    <th>Vehicle Brand</th>
                                    <th>Vehicle Model</th>
                                    <th>Battery Capacity</th>
                                    <th>Connector Type</th>
                                    <th>Charging Date</th>
                                    <th>Time Slot</th>
                                    <th>Estimated Units</th>
                                    <th>Charging Bay Number</th>
                                </tr>
                            </thead>

                            <tbody>
                                {edata.map((value, index) => (
                                    <tr key={index}>
                                        <td className="fw-semibold">{value.bookingId}</td>
                                        <td>{value.ownerName}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td className="fw-medium">{value.vehicleRegistrationNumber}</td>
                                        <td>{value.vehicleBrand}</td>
                                        <td>{value.vehicleModel}</td>
                                        <td>{value.batteryCapacity}</td>
                                        <td>{value.connectorType}</td>
                                        <td>{value.chargingDate}</td>
                                        <td>{value.timeSlot}</td>
                                        <td>{value.estimatedUnits}</td>
                                        <td>{value.chargingBayNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewVehicle