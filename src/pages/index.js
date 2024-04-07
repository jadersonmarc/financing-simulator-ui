import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SimulationHeader from '../components/SimulationHeader';
import SimulationForm from '../components/SimulationForm';
import VehicleCard from '../components/VehicleCard';
import SimulatedValues from '../components/SimulatedValues';
import Footer from '../components/Footer';
import { fetchVehicles, fetchSimulation } from '../components/utils/api';


export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesSelected, setVehiclesSelected] = useState(null);
  const [simulationResult, setSimulationResult] = useState(null);

  const handleVehiclesSelected = async (vehicle) => {
      setVehiclesSelected(vehicle);
      const { price: vehiclePrice, downPayment: entryPercentage , Installments: numberOfInstallments } = vehicle;
      const response = await fetchSimulation( vehiclePrice, entryPercentage, numberOfInstallments)
      setSimulationResult(response);
      
  };
  
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
        <SimulationForm vehicles={vehicles} onVehiclesSelected={handleVehiclesSelected} />
        
      <div className="lg:flex  max-sm:space-y-6 lg:space-x-6 mb-24 px-6">
        
        {simulationResult && <VehicleCard vehicle={vehiclesSelected} />}
        {simulationResult && <SimulatedValues result={simulationResult} />}
      </div>

      <Footer />
    </main>
  );
}
