document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const content = document.getElementById('content');

    // Cargar la sección de inicio por defecto
    loadSection('home');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = event.target.getAttribute('href').substring(1);
            loadSection(section);
        });
    });

    function loadSection(section) {
        fetch(`${section}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                content.innerHTML = `<p>Error al cargar la sección: ${error}</p>`;
            });
    }
});
