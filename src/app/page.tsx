import Navbar from '../components/common/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ChallengeSection from '../components/sections/ChallengeSection';
import Analyzesection from '../components/sections/Analyzesection';
import Workoutsection from '../components/sections/Workoutsection';
import Experttrainersection from '../components/sections/Experttrainersection';
import Trainingdevice from '../components/sections/Trainingdevicesection';
import SubscribePage from '../components/sections/Subscribesection';
import Footer from '../components/sections/Footersection';

export default function Home() {
  return (
    <>
    <div className='px-10'>
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <Analyzesection />
      <Workoutsection />
      <Experttrainersection />
      <Trainingdevice />
      <SubscribePage />
    </div>
      <Footer />
    </>
  );
}