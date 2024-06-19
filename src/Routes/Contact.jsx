import { useNavigate } from 'react-router-dom';
import Form from '../Components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
  const navigate = useNavigate();


  return (
    <div className='contact'>
      <h1 className="contact-tile">¿Querés saber más?</h1>
      <p className="contact-text">Envíanos tus dudas y nos pondemos en contacto contigo!</p>
      <Form/>
      <button className="back" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faChevronLeft} style={{color: '#5f9ea0', marginRight: '10px'}} />VOLVER ATRÁS</button>

    </div>
  )
}

export default Contact