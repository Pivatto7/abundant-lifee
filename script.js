document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Delay ---
    const SECONDS_TO_DELAY = 1387; // 23:07
    const MILLISECONDS_TO_DELAY = SECONDS_TO_DELAY * 1000;
    
    const delayedElements = document.querySelectorAll('.hide-delay');
    
    // Verifica se o delay deve ser ignorado (ex: para testes via URL ?delay=false)
    const urlParams = new URLSearchParams(window.location.search);
    const skipDelay = urlParams.get('delay') === 'false';

    if (skipDelay) {
        delayedElements.forEach(el => el.classList.remove('hide-delay'));
    } else {
        setTimeout(() => {
            delayedElements.forEach(el => {
                el.classList.remove('hide-delay');
                // Adiciona uma pequena animação de fade-in (opcional, requer CSS adicional se desejar)
                el.style.opacity = "0";
                el.style.transition = "opacity 1s ease-in-out";
                setTimeout(() => el.style.opacity = "1", 10);
            });
        }, MILLISECONDS_TO_DELAY);
    }

    // --- Outras interações ---
    const ctaLinks = document.querySelectorAll('.cta-link, .cta-button');
    ctaLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Logica adicional se necessário
        });
    });
});
