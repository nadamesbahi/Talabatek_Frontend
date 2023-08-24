
import React from "react";
import {  Routes, Route } from "react-router-dom";
import Dashboard from './RestaurantDashboard/Dashboard'
import Profil from './RestaurantDashboard/Profil'
import Commandes from './RestaurantDashboard/Commandes'
import Reservations from './RestaurantDashboard/Reservations'
import Menu from './RestaurantDashboard/Menu'
import AjouterPlat from './RestaurantDashboard/AjouterPlat'
import ModifierPlat from './RestaurantDashboard/ModifierPlat'
import Sidebar from './RestaurantDashboard/Composants-Dashboard-Restaurant/Sidebar'
import Catégorie from './Interfaces/Catégorie'
import Plats from './Interfaces/Plats'
import Plat from './Interfaces/Plat'
import Cart from './Interfaces/Cart'
import Order from './Interfaces/Order'
import Adresse from './Interfaces/Adresse'
import Paiement from './Interfaces/Paiement'
import SuccesCommande from './Interfaces/SuccesCommande'
import Footer from './Interfaces/Composants-Interfaces/Footer'
import HeaderNav from './Interfaces/Composants-Interfaces/HeaderNav'
import CategoriesRestaurant from "./RestaurantDashboard/CategoriesRestaurant";
const RestaurantRoutes = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/commandes" element={<Commandes />} />
        <Route path="/reservations" element={<Reservations />} />

        <Route path="/menu" element={<Menu />} />
        <Route
          path="/ajouter_plat"
          element={<AjouterPlat />} />
        <Route path="/categories_restaut" element={<CategoriesRestaurant />} />
        <Route path="/modifier_plat/:id" element={<ModifierPlat />} />
      </Routes>
    </Sidebar>
  )
}
const InterfacesRoutes = () => {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/categories" element={<Catégorie />} />
        <Route path="/plats/:id" element={<Plats />} />
        <Route path="/plat/:id" element={<Plat />} />
        <Route path="/cart/:id/:qtt/:idC" element={<Cart />} />
        <Route path="/order/:id/:quantite" element={<Order />} />
        <Route path="/adresse/:data" element={<Adresse />} />
        <Route path="/paiement" element={<Paiement />} />
        <Route path="/succes" element={<SuccesCommande />} />
      </Routes>
      <Footer />
    </>
  )
}
function App() {
  return (
    <div className="App">
      <RestaurantRoutes/>
      {/* <InterfacesRoutes /> */}
    </div>
  );
}

export default App;
