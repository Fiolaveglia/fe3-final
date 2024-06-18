import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'



const Form = () => {

    const [persona, setPersona] = useState({
        nombre: "",
        email: "",
    });
    const [exito, setExito] = useState(false);
    const [error, setError] = useState("");

    const handleName = (e) =>
        setPersona({ ...persona, nombre: e.target.value });
    const handleEmail = (e) =>
        setPersona({ ...persona, email: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        const nombreValido = persona.nombre.length > 5;
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(persona.email);

        setError(!nombreValido);

        if (nombreValido && emailValido) {
            console.log("Formulario enviado: ", persona);
            setExito(true);
            setError(false);
        } else {
            setExito(false);
            setError("Por favor verifique su información nuevamente");
        }
    };

    return (
        <>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={persona.nombre}
                            onChange={handleName}
                            placeholder="Nombre"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={persona.email}
                            onChange={handleEmail}
                            placeholder="Email"
                        />
                    </div>
                    <button className='contact-btn' type="submit">ENVIAR <FontAwesomeIcon icon={faPaperPlane} style={{color: '#5f9ea0', marginLeft:'5px'}} />
                    </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {exito && (
                    <p>
                        Gracias {persona.nombre}, te contactaremos cuando antes
                        vía mail
                    </p>
                )}
            </div>
        </>
    );
};

export default Form;
