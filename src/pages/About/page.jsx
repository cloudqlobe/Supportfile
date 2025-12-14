import React, { useRef } from 'react'
import Aboutheader from './components/Aboutheader'
import Aboutconnect from './components/Aboutconnect'
import Aboutanimation from './components/Aboutanimation'
import Aboutcontent1 from './components/Aboutcontent1'
import ContactSection from '../Home/components/ContactSection'

const page = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <Aboutheader onContactClick={scrollToContact} />
      <Aboutcontent1 />
      <Aboutanimation />
      <div ref={contactRef}>
        <Aboutconnect />
      </div>
    </div>
  )
}

export default page