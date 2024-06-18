import React, { useContext } from "react";
import Form from '../Components/Form'
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const {state} = useContext(ContextGlobal)

  return (
    <div className={`contact ${state.theme}`}>
      <h1 className="contact-tile">Want to know more?</h1>
      <p className="contact-text">Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact