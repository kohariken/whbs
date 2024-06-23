document.addEventListener('DOMContentLoaded', () => {
    // Função para adicionar rolagem suave ao clicar em itens do menu
    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    
});