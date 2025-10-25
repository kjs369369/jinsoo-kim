
import React from 'react';
import Header from './components/Header';
import CourseOverview from './components/CourseOverview';
import Curriculum from './components/Curriculum';
import SpecialBenefits from './components/SpecialBenefits';
import SpecialOffer from './components/SpecialOffer';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollAnimator from './components/ScrollAnimator';

const App: React.FC = () => {
  return (
    <div className="bg-black text-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <ScrollAnimator>
          <CourseOverview />
        </ScrollAnimator>
        <ScrollAnimator>
          <Curriculum />
        </ScrollAnimator>
        <ScrollAnimator>
          <SpecialBenefits />
        </ScrollAnimator>
        <ScrollAnimator>
          <SpecialOffer />
        </ScrollAnimator>
        <ScrollAnimator>
          <Pricing />
        </ScrollAnimator>
      </main>
      <Footer />
    </div>
  );
};

export default App;
