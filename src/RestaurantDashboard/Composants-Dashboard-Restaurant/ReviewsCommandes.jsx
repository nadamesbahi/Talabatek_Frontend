import React, { useEffect, useState } from 'react'
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,

} from "recharts";
export default function ReviewsCommandes() {
    const [commandes, setCommandes] = useState([]);
   
    useEffect(() => {
        //get all commandes
        fetch(`http://127.0.0.1:8000/api/commandes`)
        .then(res => res.json())
        .then(response => setCommandes(response));    
    }, []);
    const commande=commandes.filter(c=>c.etat=='accepter').length
    const data = [
        {
            name: 'Lundi',
            Nombre: commande+3,
        },
        {
            name: 'Mardi',
            Nombre: commande+1,
        },
        {
            name: 'Mercredi',
            Nombre: commande+3,
        },
        {
            name: 'Jeudi',
            Nombre: commande+6,
        },
        {
            name: 'Vendredi',
            Nombre: commande+9,
        },
        {
            name: 'Samedi',
            Nombre: commande+12,
        },
        {
            name: 'Dimanche',
            Nombre: commande+13,
        }
    ]
    
    return (
        <div className='d-flex my-3 chart-commande'>
            <BarChart
                width={550}
                height={350}
                data={data}
                margin={{
                    top: 5,
                    // right: 30,
                    // left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Nombre" fill="#F57138" />
            </BarChart>

        </div>


    )
}
