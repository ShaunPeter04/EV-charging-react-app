import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-3" style={{ backgroundColor: '#0b1519', borderBottom: '1px solid rgba(0, 229, 153, 0.15)' }}>
                <div className="container">
                    {/* Brand with Electric/Eco Green Accent */}
                    <Link className="navbar-brand fw-extrabold fs-4 text-white tracking-tight d-flex align-items-center gap-2" to="/" style={{ letterSpacing: '-0.03em' }}>
                        {/* Simple Inline EV Plug Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00e599" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                        </svg>
                        <span>EV <span style={{ color: '#00e599' }}>Charge</span>Hub</span>
                    </Link>

                    {/* Borderless Dark Mobile Menu Toggler */}
                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-3 mt-3 mt-lg-0">
                            {/* View Vehicles - Styled as a sleek text link */}
                            <li className="nav-item">
                                <Link
                                    className="btn rounded-pill px-4 py-2 fw-semibold shadow-sm text-dark transition-all"
                                    to="/"
                                    style={{
                                        backgroundColor: '#00e599',
                                        border: 'none',
                                        boxShadow: '0 0 15px rgba(0, 229, 153, 0.3)'
                                    }}
                                >
                                    Add Vehicle
                                </Link>
                            </li>

                            {/* Add Vehicle - Styled as the primary "Electric" Action Button */}
                            <li className="nav-item">
                                <Link
                                    className="btn rounded-pill px-4 py-2 fw-semibold shadow-sm text-dark transition-all"
                                    to="/view"
                                    style={{
                                        backgroundColor: '#00e599',
                                        border: 'none',
                                        boxShadow: '0 0 15px rgba(0, 229, 153, 0.3)'
                                    }}
                                >
                                    View Vehicle
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar