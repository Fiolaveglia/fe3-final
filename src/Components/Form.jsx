import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';



const Form = () => {

    const [persona, setPersona] = useState({
        nombre: "",
        email: "",
    });
    const [exito, setExito] = useState(false);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({
        nombre: false, 
        email: false
    })

    const handleName = (e) =>{
        setPersona({ ...persona, nombre: e.target.value });
    if(e.target.value.length > 5) {
        setErrors({ ...errors, nombre: false });
    }
} 

    const handleEmail = (e) =>{
        setPersona({ ...persona, email: e.target.value });
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
            setErrors({ ...errors, email: false });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombreValido = persona.nombre.length > 5;
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(persona.email);


        if (nombreValido && emailValido) {
            console.log("Formulario enviado: ", JSON.stringify(persona));
            setExito(true);
            setError('');
            setOpen(true);
        } else {
            setExito(false);
            setError("Por favor verifique su información nuevamente");
            setOpen(true);
            setErrors({
                nombre: !nombreValido,
                email: !emailValido,
            });
        }
    };


    return (
        <>            
                    {error && (
                        <div className="alert-container">
                            <Collapse in={open}>
                                <Alert
                                    severity="error"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                >
                                    {error}
                                </Alert>
                            </Collapse>
                        </div>
                    )}
                    
                    
                    {exito && (
                        <div className="alert-container">
                            <Collapse in={open}>
                                <Alert
                                    severity="success"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}>
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>}>Gracias {persona.nombre}, te contactaremos cuando antes vía mail
                                </Alert>
                            </Collapse>
                        </div>
                    )}        
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={persona.nombre}
                            onChange={handleName}
                            placeholder="Nombre"
                            style={{
                                borderColor: errors.nombre ? 'red' : 'initial'}}
                        />
                        <input
                            type="text"
                            value={persona.email}
                            onChange={handleEmail}
                            placeholder="Email"
                            style={{
                                borderColor: errors.email ? 'red' : 'initial',
                            }}
                        />
                    <button className='contact-btn' type="submit">ENVIAR <FontAwesomeIcon icon={faPaperPlane} style={{color: '#5f9ea0', marginLeft:'5px'}} />
                    </button>
                </form>
            </div>

                {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                </>
            );

};
export default Form;


