import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';

function ReviewsCatégories() {
    const [categories,setCategories]=useState([])
    useEffect(() => {
        //get all categories
        fetch(`http://127.0.0.1:8000/api/categories`)
            .then(res => res.json())
            .then(response => setCategories(response));
    }, []);

const drink=categories.filter(p=>p.nom=='Drink').length
const pizza=categories.filter(p=>p.nom=='Pizza').length
const tacos=categories.filter(p=>p.nom=='Tacos').length
const poulet=categories.filter(p=>p.nom=='Chicken').length
const dessert=categories.filter(p=>p.nom=='Dessert').length
    return (
            <div className="d-flex justify-content-center mb-5 mx-5 my-3">
                <Chart 
                    type="donut"
                    width={400}
                    height={400}
                    series={[drink, pizza, tacos, dessert, poulet]}
                    options={{
                        labels: ['Drink', 'Pizza', 'Tacos', 'Dessert', 'Chicken'],
                        title: {
                            text: "",
                        },

                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            showAlways: true,
                                            fontSize: 30,
                                            color: '#f90000',
                                        }
                                    },

                                }
                            }

                        },

                        dataLabels: {
                            enabled: true,
                        }


                    }}

                />
             </div>

    );
}
export default ReviewsCatégories;