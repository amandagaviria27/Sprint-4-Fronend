import {Fragment, useRef} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import ReactDOM from 'react-dom'
//import input from './input';
import './Formularios.css';

export default function Formularios(){

	const nombreRef = useRef();
	const apellidoRef = useRef();
	const numeroidentificacionRef = useRef();
	const correoRef = useRef();
	const telefonoRef = useRef();
	const tipoencomiendaRef = useRef();
	const direccionrecogidaRef = useRef();
	const departamentoRef=useRef();
	const ciudadRef = useRef();	
	const fechayhoraRef = useRef();	
	const longitudRef = useRef();
	const pesoRef =useRef();
	const direccionentregaRef = useRef();
	const ciudadentregaRef=useRef();
	const datosdestinatarioRef = useRef();
	const identificaciondestinatarioRef = useRef();


	function formOtro (){

		const nom = nombreRef.current.value;
		const ape = apellidoRef.current.value;
		const cc = numeroidentificacionRef.current.value;
		const mail = correoRef.current.value;
		const tel = telefonoRef.current.value;
		const te = tipoencomiendaRef.current.value;
		const dir = direccionrecogidaRef.current.value
		const dep = departamentoRef.current.value;
		const ciu = ciudadRef.current.value;
		const fechH = fechayhoraRef.current.value;
		const long = longitudRef.current.value;
		const pes= pesoRef.current.value;
		const direntr=direccionentregaRef.current.value;
		const ciudentr=ciudadentregaRef.current.value;
		const datosdes=datosdestinatarioRef.current.value;
		const identdesti=identificaciondestinatarioRef.current.value;


		// promesa para consumir una api los datos del servidor
       // fetch("http://127.0.0.1")

       fetch("http://localhost:8000/solicitarecogida",{

            //le decimos que le vamos a pasar un json
            headers: {"content-type": "application/json"},

            // el metodo
            method: "POST",

            //los valores
            body : JSON.stringify({ nom, ape,cc,mail,tel,te,dir,dep,ciu,fechH,long,pes, direntr,ciudentr,datosdes,identdesti})



          }).then (data => data.json()) //then= respuesta de la promesa - res = variable que recibe la respuesta con un json, //cuando el ejecuta un json activa otra promesa por eso toca recibir otro then para que capture los datos en forma de json
          .then(res =>{
            console.log(res);
            if (res.estado === "ok"){
                 window.location.href = res.url;
            }else {
                alert ("Error: El formulario no se pudo guardar")
            }
          })
          .catch(err => alert(err))
          .finally()
	}

	return (
		<Fragment>
		<form>
			{/* <h1>FORMULARIO SOLICITUD DE RECOGIDA DE ENCOMIENDAS</h1> */}
			{/* <Formulario action="" onSubmit={onSubmit}> */}
				
				<label>Nombres</label>
				<input
					ref ={nombreRef}
					tipo="text"
					// label="Nombre"
					// placeholder=""
				/>
				
				<label>Apellidos</label>
				<input
					ref ={apellidoRef}
					tipo="text"
					label="Apellido"
					placeholder=""
				/>

				<label>Numero de identificación</label>
				<input
					ref ={numeroidentificacionRef}
					tipo="text"
					label="Numero de Identificacion"
					placeholder=""
				/>

				<label>Correo Electrónico</label>
				<input
					ref ={correoRef}
					tipo="email"
					label="Correo Electrónico"
					placeholder=""
				/>

				<label>Teléfono</label>
				<input
					ref ={telefonoRef}
					tipo="text"
					label="Teléfono"
					placeholder=""
				/>
				<label>tipo de Encomienda</label>
				<input
					ref ={tipoencomiendaRef}
					tipo="text"
					label="Tipo de Encomienda"
					placeholder=""
				/>

				<label>Dirección de Recogida</label>
				<input
					ref ={direccionrecogidaRef}
					tipo="text"
					label="Dirección de Recogida"
					placeholder=""
				/>

				<label>Departamento</label>
				 <input
					ref ={departamentoRef}
					tipo="text"
					label="Departamento"
					placeholder=""
				/>

				<label>Ciudad de Entrega</label>
				<input
					ref ={ciudadentregaRef}
					tipo="text"
					label="Ciudad"
					placeholder=""
				/>

				<label>Fecha y Hora</label>
				<input
					ref ={fechayhoraRef}
					tipo="text"
					label="Fecha y Hora"
					placeholder=""
				/>

				<label>Longitud de la Encomienda</label>
				<input
					ref ={longitudRef}
					tipo="text"
					label="Longitud"
					placeholder=""
				/>
				<label>Peso de la Encomienda</label>
				<input
					ref ={pesoRef}
					tipo="text"
					label="Peso"
					placeholder=""
				/>
				<label>Dirección de Entrega</label>
				<input
					ref ={direccionentregaRef}
					tipo="text"
					label="Dirección de Entrega"
					placeholder=""
				/>

				<label>Ciudad de Entrega</label>
				<input
					ref ={ciudadentregaRef}
					tipo="text"
					label="Ciudad de Entrega"
					placeholder=""
				/>

				<label>Nombres y Apellidos del Destinatario</label>
				<input
					ref ={datosdestinatarioRef}
					tipo="text"
					label="Nombres y Apellidos del Destinatario"
					placeholder=""
				/>
				<label>Número de Identificación del Destinatario</label>
				<input
					ref ={identificaciondestinatarioRef}
					tipo="text"
					label="Numero de Identificacion del Destinatario"
					placeholder=""
				/>
				
				{/* <ContenedorTerminos>
					<label>								
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</label>
				// </ContenedorTerminos> */}
				{/* // {formularioValido === false && <MensajeError> */}
				{/*<p>}
				{/* {<FontAwesomeIcon icon={faExclamationTriangle}/>} */}
				{/* // 		<b>Error:</b> Por favor rellena el formulario correctamente.
				// 	</p>
				// </MensajeError>} */}
				<div>
				<button
					onClick={formOtro}
                    variant="contained"
                    color="primary"
                    type="button">
                	Enviar
                </button>
					{/* {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>} */}
				</div>
			</form>
			</Fragment>
	);
}
