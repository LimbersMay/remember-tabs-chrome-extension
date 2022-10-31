
export const handleMessage = ( element ) => {
    // Obtenemos contenedor del mensaje
    const messageContainer = document.querySelector( '.message_container' );
    messageContainer.innerHTML = '';
    messageContainer.appendChild( element );
}  
