import { useRef } from 'react'
import Aboutheader from './components/Aboutheader'
import Aboutconnect from './components/Aboutconnect'
import Aboutanimation from './components/Aboutanimation'
import Aboutcontent1 from './components/Aboutcontent1'

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