import Image from "next/image";
import Header from '../components/Header';
import SimulationHeader from '../components/SimulationHeader';
import SimulationForm from '../components/SimulationForm';
import VehicleCard from '../components/VehicleCard';SimulatedValues
import SimulatedValues from '../components/SimulatedValues';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';


export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <main
      className={`flex min-h-screen flex-col `}
    >
        <Header />
        <SimulationHeader />
        <SimulationForm onSubmit={handleSubmit} register={register} />
        
      <div className="lg:flex  max-sm:space-y-6 lg:space-x-6 mb-24 px-6">
        <VehicleCard />
        <SimulatedValues />
      </div>

      <Footer />

    </main>
  );
}
