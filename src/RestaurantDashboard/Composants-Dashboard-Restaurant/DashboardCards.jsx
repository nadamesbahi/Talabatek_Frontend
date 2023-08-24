import React, { useEffect, useState } from "react";
import {
    FaDollarSign,
} from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function DashbordCards() {
    const [commandes, setCommandes] = useState([]);
    const [plats, setPlats] = useState([]);
    const [refresh,setrefresh]=useState(false)


    useEffect(() => {
        //get all commandes
        fetch(`http://127.0.0.1:8000/api/commandes/`)
            .then(res => res.json())
            .then(response => setCommandes(response));

        //get all plats
        fetch('http://127.0.0.1:8000/api/plats')
            .then(res => res.json())
            .then(response => setPlats(response));
    }, []);



    return (
        <div className="container ">
            <div className="row gap-4 mt-1 text-light ">
                <div className="col buttom-dashbord pt-2 pb-3 px-4 mt-5 shadow-lg rounded">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-5">Total Balance</div>
                        <div className="sidebar-items-background rounded-pill p-2 fs-3 d-flex justify-content-center ">
                            <FaDollarSign className="buttom-dashboard-color" />
                        </div>
                    </div>
                    <div className="fs-4">$2256</div>
                    <div className="mt-3 ">Updated Hour ago</div>
                </div>

                <div className="col top-dashboard pt-2 pb-3 px-4 mt-5 shadow-lg rounded">
                    <Link to={'/commandes'} className="text-white">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-5">Total Commandes</div>
                            <div className="sidebar-items-background rounded-pill p-2 fs-3 d-flex justify-content-center ">
                                <img src="/images/icons/commandes.svg" alt="icon-commandes" className="top-dashboard-color" />

                            </div>
                        </div>
                        <div className="fs-4">{commandes.length}</div>
                        <div className="mt-3 ">Updated Hour ago</div>
                    </Link>
                </div>
                <div className="col buttom-dashbord pt-2 pb-3 px-4 mt-5 shadow-lg rounded">
                    <Link to={'/menu'} className="text-white">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-5">Total Plats</div>
                            <div className="sidebar-items-background rounded-pill p-2 fs-3 d-flex justify-content-center ">
                                <BiRestaurant className="buttom-dashboard-color" />
                            </div>
                        </div>
                        <div className="fs-4">{plats.length}</div>
                        <div className="mt-3 ">Updated Hour ago</div>
                    </Link>
                </div>
                <div className="col top-dashboard pt-2 pb-3 px-4 mt-5 shadow-lg rounded">
                    <Link to={'/reservations'} className="text-white">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-5">Total Réservations</div>
                            <div className="sidebar-items-background rounded-pill p-2 fs-3 d-flex justify-content-center ">
                                <img src="/images/icons/reservations.svg" alt="icon-reservations" className="top-dashboard-color" />

                            </div>
                        </div>
                        <div className="fs-4">8</div>
                        <div className="mt-3 ">Updated Hour ago</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
