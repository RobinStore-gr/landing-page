import Home from './components/Home';
import WhatWeDo from './components/WhatWeDo';
import Team from './components/Team';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: 0.2, // Adjust the threshold value as needed
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const index = sectionRefs.current.indexOf(target);
          if (index !== -1) {
            // Scroll to the section
            target.scrollIntoView({ behavior: 'smooth', block: 'start', TransitionEvent: 'ease-in-out' });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all section elements
    sectionRefs.current.forEach((sectionRef) => {
      observer.observe(sectionRef);
    });

    // Clean up the observer
    return () => {
      observer.disconnect();
    };
  }, []);

  const registerSectionRef = (ref) => {
    if (ref && !sectionRefs.current.includes(ref)) {
      sectionRefs.current.push(ref);
    }
  };

  return (
    <div style={{
      height: 'fit-content',
      position: 'relative',
      overflowX: 'hidden',
      }}>
      {/* <Header /> */}
      <section ref={registerSectionRef} id="Home">
        <Home />
      </section>
      <section ref={registerSectionRef} id="WhatWeDo">
        <WhatWeDo />
      </section>
      <section id="OurTeam">
        <Team />
      </section>

    </div>

    
  );
}

export default App;
