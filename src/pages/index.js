import Header from '../components/Header';
import SimulationHeader from '../components/SimulationHeader';
import SimulationForm from '../components/SimulationForm';
import VehicleCard from '../components/VehicleCard';
import SimulatedValues from '../components/SimulatedValues';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <main className={`flex min-h-screen flex-col `}>
        <Header />
        <SimulationHeader />
        <SimulationForm />
        
      <div className="lg:flex  max-sm:space-y-6 lg:space-x-6 mb-24 px-6">
        <VehicleCard />
        <SimulatedValues />
      </div>

      <Footer />
    </main>
  );
}
