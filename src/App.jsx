import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Recitals from './components/Recitals';
import Timeline from './components/Timeline';
import FreelanceFocus from './components/FreelanceFocus';
import Faculty from './components/Faculty';
import Testimonial from './components/Testimonial';
import Fees from './components/Fees';
import Footer from './components/Footer';
import EnrollModal from './components/EnrollModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('full');

  const openEnrollModal = (planId = 'full') => {
    setSelectedPlan(planId);
    setIsModalOpen(true);
  };

  const closeEnrollModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen relative z-10 flex flex-col justify-between">
      <div>
        <Navbar onEnrollClick={() => openEnrollModal('full')} />
        <main>
          <Hero onEnrollClick={() => openEnrollModal('full')} />
          <TrustStats />
          <Recitals />
          <Timeline />
          <FreelanceFocus />
          <Faculty />
          <Testimonial />
          <Fees onEnrollClick={openEnrollModal} />
        </main>
      </div>
      <Footer />
      
      {/* Interactive Modal */}
      <EnrollModal 
        isOpen={isModalOpen} 
        onClose={closeEnrollModal} 
        selectedPlan={selectedPlan}
      />
    </div>
  );
}

export default App;
