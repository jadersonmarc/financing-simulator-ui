import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SimulationHeader from '../components/SimulationHeader';
import SimulationForm from '../components/SimulationForm';
import VehicleCard from '../components/VehicleCard';
import SimulatedValues from '../components/SimulatedValues';
import Footer from '../components/Footer';
import { fetchVehicles, fetchSimulation } from '../components/utils/api';


export default function Home({ vehicles }) {
 
  const [vehiclesSelected, setVehiclesSelected] = useState(null);
  const [simulationResult, setSimulationResult] = useState(null);

  const handleVehiclesSelected = async (vehicle) => {
      setVehiclesSelected(vehicle);
      const { price: vehiclePrice, downPayment: entryPercentage , Installments: numberOfInstallments } = vehicle;
      const response = await fetchSimulation( vehiclePrice, entryPercentage, numberOfInstallments)
      setSimulationResult(response);
      
  };

  return (
    <main className={`flex min-h-screen flex-col `}>
        <Header />
        <SimulationHeader />
        <SimulationForm vehicles={vehicles} onVehiclesSelected={handleVehiclesSelected} />
        
      <div className="lg:flex  max-sm:space-y-6 lg:space-x-6 mb-24 px-6">
        
        {simulationResult && <VehicleCard vehicle={vehiclesSelected} />}
        {simulationResult && <SimulatedValues result={simulationResult} />}
      </div>

      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  let vehicles = [];
  try {
    vehicles = await fetchVehicles(); // Sua função que retorna a lista de veículos
  } catch (error) {
    console.error("Erro ao buscar carros:", error);
  }

  return {
    props: {
      vehicles,
    },
    revalidate: 3600, 
  };
}