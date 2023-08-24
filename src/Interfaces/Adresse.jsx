import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function Adresse() {
    const [valueSearch, setValueSearch] = useState();
    const [apidata, setapidata] = useState();

    useEffect(() => {
        fetch(
            `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_AA2yvltay1OavljCzIanWcCuugx4F&ipAddress=41.250.228.254`
        ).then((response) => response.json())
            .then((actualData2) => {
                setapidata(actualData2.location);
                setValueSearch(`${actualData2.location.region}, ${actualData2.location.city}`);
            });
    }, []);

    const { data } = useParams();
    const objectData = JSON.parse(decodeURIComponent(data));
    //get add commande
    const addCommande = async () => {
        const formData = new FormData();
        formData.append('mode_paiement', objectData.mode_paiement)
        formData.append('adresse', valueSearch)
        formData.append('total', objectData.total)

        await axios.post(`http://127.0.0.1:8000/api/ajouterCommande`, formData)
            .then(({ data }) => {
                console.log(data.message)
            }).catch(({ response }) => {
                console.log(response.data.errors)
            })
    };

     //get update detailCmnd
    const update = async () => {
        const formData = new FormData();
        formData.append('_method', 'PATCH')
        formData.append('quantité_commander', objectData.qtt)
        formData.append('total', objectData.total)
        await axios.post('http://127.0.0.1:8000/api/updatePlat/' + objectData.plat, formData)
            .then(({ data }) => {
                console.log(data)
            }).catch(({ response }) => {
                console.log(response.data.errors)
            })
    }
    const handleClick = () => {
        addCommande();
        update();
    }
    return (
        <section>
            <div className="container-fluid m-auto container-color">
                <div className="row gap-3">
                    <div className="col pt-3 d-flex content-adresse">
                        <div className='div-border-left'></div>
                        <h1 className='px-2'>Adresse</h1>
                    </div>
                </div>
                <div className="row gap-3 pt-3">
                    <div className="col d-flex justify-content-center">
                        <form className="w-75 text-center form-search-adress" action='#'>
                            <div class="inner-form">
                                <div class="input-field">
                                    <button class="btn-search" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                    </button>
                                    <input id="search" type="text" placeholder="Search" name='search' value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                        <div className="map-adress" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103599.6081796624!2d-5.904510401529874!3d35.76339324584555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTanger!5e0!3m2!1sfr!2sma!4v1681211284921!5m2!1sfr!2sma" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col d-flex justify-content-center">
                        <Link className='Link' to='/succes'><button className='btn button-addCart px-3' onClick={handleClick}>Confirmer</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
