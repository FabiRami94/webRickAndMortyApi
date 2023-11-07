
import alert from 'sweetalert2';

// export const alertSuccess = () => {
//     alert.fire({
//         title:"Mensaje enviado",
//         html: `<div class="modalExpert">
//                     <span>Muchas gracias, me pondré en contacto con usted.</span> 
//                     <hr>
//                 </div>`,
//         icon: "success",
//         showConfirmButton: false,
//         showCloseButton: true,
//     })
// }

export const alertError = (mensaje) =>{
    alert.fire({
        width: '20rem',
        title:"Lo sentimos",
        text: mensaje,
        icon: "error",
        confirmButtonText: 'Cerrar'
    })
}