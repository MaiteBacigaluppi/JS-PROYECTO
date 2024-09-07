function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = item.imagen;
    img.alt = item.nombre;

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h3');
    title.textContent = item.nombre;

    const description = document.createElement('p');
    description.textContent = item.descripcion;

    const price = document.createElement('p');
    price.textContent = `$${item.precio}`;

    const button = document.createElement('button');
    button.textContent = 'Añadir al carrito';
    button.onclick = () => agregarAlCarrito(item);

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(price);
    content.appendChild(button);
    card.appendChild(img);
    card.appendChild(content);

    return card;
}

function mostrarModalConfirmacion(mensaje, callback) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').textContent = 'Confirmación';
    document.getElementById('modal-description').textContent = mensaje;
    modal.style.display = 'block';

    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    };

    document.getElementById('modal-confirm').onclick = function() {
        callback();
        modal.style.display = 'none';
    };
}
