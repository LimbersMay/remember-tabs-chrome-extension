
export const createMessageElement = ( message, id ) => {

    const element = document.createElement('p');
    element.innerHTML = message;
    element.id = id;

    return element;
}
