document.addEventListener('DOMContentLoaded', async () => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito'));
    if (storedCarrito) {
        carrito = storedCarrito;
        actualizarCarrito();
    }

    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.statusText}`);
        }
        const data = await response.json();
        const excursionList = document.getElementById('excursion-list');
        data.excursiones.forEach(excursion => {
            const card = createCard(excursion);
            excursionList.appendChild(card);
        });

        const caminataList = document.getElementById('caminata-list');
        data.caminatas.forEach(caminata => {
            const card = createCard(caminata);
            caminataList.appendChild(card);
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Hubo un problema al cargar los datos: ${error.message}`
        });
        console.error('Error al cargar los datos:', error);
    }

    document.getElementById('carrito-icon').onclick = function() {
        const carritoSection = document.getElementById('carrito');
        carritoSection.classList.toggle('show');
    };

    document.getElementById('carrito-close').onclick = function() {
        document.getElementById('carrito').classList.remove('show');
    };

    document.querySelector('.close').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    };

    document.getElementById('modal-confirm').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    };
});
