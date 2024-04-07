import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SimulationHeader from '../components/SimulationHeader';
import SimulationForm from '../components/SimulationForm';
import VehicleCard from '../components/VehicleCard';
import SimulatedValues from '../components/SimulatedValues';
import Footer from '../components/Footer';
import { fetchVehicles } from '../components/utils/api';


export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  
    useEffect(() => {
      const getVehicles = async () => {
        try {
          const response = await fetchVehicles();
          setVehicles(response);
        } catch (error) {
          console.error("Erro ao buscar carros:", error);
        }
      };
  
      getVehicles();
    }, []);

  return (
    <main className={`flex min-h-screen flex-col `}>
        <Header />
        <SimulationHeader />
        <SimulationForm vehicles={vehicles} />
        
      <div className="lg:flex  max-sm:space-y-6 lg:space-x-6 mb-24 px-6">
        <VehicleCard />
        <SimulatedValues />
      </div>

      <Footer />
    </main>
  );
}
