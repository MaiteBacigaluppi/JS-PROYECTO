let carrito = [];

function agregarAlCarrito(item) {
    try {
        carrito.push(item);
        actualizarCarrito();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo agregar el producto al carrito.'
        });
        console.error('Error al agregar al carrito:', error);
    }
}

function actualizarCarrito() {
    try {
        const carritoList = document.getElementById('carrito-list');
        carritoList.innerHTML = '';
        let total = 0;

        carrito.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.nombre} - $${item.precio}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.onclick = () => {
                carrito.splice(index, 1);
                actualizarCarrito(); 
            };

            listItem.appendChild(removeButton);
            carritoList.appendChild(listItem);
            total += item.precio;
        });

        document.getElementById('carrito-contador').textContent = carrito.length;
        document.getElementById('carrito-total').textContent = `Total: $${total}`;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo actualizar el carrito.'
        });
        console.error('Error al actualizar el carrito:', error);
    }
}

function vaciarCarrito() {
    try {
        carrito = [];
        localStorage.removeItem('carrito'); 
        actualizarCarrito();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo vaciar el carrito.'
        });
        console.error('Error al vaciar el carrito:', error);
    }
}

document.getElementById('vaciar-carrito').onclick = function() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Esto eliminará todos los productos del carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, vaciar carrito',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            vaciarCarrito();
            Swal.fire(
                '¡Vacío!',
                'Tu carrito ha sido vaciado.',
                'success'
            );
        }
    });
};

document.getElementById('contratar').onclick = function() {
    Swal.fire({
        title: 'Completa tus datos',
        html:
            '<input id="nombre" class="swal2-input" placeholder="Nombre">' +
            '<input id="email" class="swal2-input" placeholder="Correo">',
        confirmButtonText: 'Confirmar',
        focusConfirm: false,
        preConfirm: () => {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            if (!nombre || !email) {
                Swal.showValidationMessage('Por favor, completa ambos campos');
                return false; 
            }
            return { nombre, email };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Compra confirmada',
                `Gracias ${result.value.nombre}, hemos enviado la confirmación a ${result.value.email}`,
                'success'
            );
            carrito = [];
            localStorage.removeItem('carrito');
            actualizarCarrito();
        }
    });
};