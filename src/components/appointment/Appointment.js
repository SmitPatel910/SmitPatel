import React , {useState , useContext} from 'react'
import { PopupModal } from "react-calendly";
import { contactInfo } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const Light_Appointment = () => {

  const {isDark} = useContext(StyleContext);
  const [isOpen , setIsOpen] = useState(false); 

  const pageSettings = {
    "backgroundColor": "ffffff",
    "hideEventTypeDetails": false,
    "hideLandingPageDetails": false,
    "primaryColor": "00a2ff",
    "textColor": "4d5055",
    "hideGdprBanner": true,
  }

  return (
    <div>
        <img 
            style={{ cursor: "pointer", width: "40px", height: "40px"}}
            src = {(isDark) ? contactInfo.appointment_dark_logo :  contactInfo.appointment_light_logo }
            alt="Let's Meet"
            onClick={() => setIsOpen(true)}
        />
          <PopupModal
            url="https://calendly.com/smitpatel910/meeting"
            onModalClose={() => setIsOpen(false)}
            open={isOpen}
            pageSettings={pageSettings}
            rootElement={document.getElementById("root")}
          />
      </div>
  )
}

export default Light_Appointment