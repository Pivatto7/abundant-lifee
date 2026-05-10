document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-player');
    
    if (videoContainer) {
        videoContainer.addEventListener('click', () => {
            alert('Vídeo iniciando... (Aqui você integraria seu player de VSL, como Vimeo ou Wistia)');
            // Exemplo de integração:
            // videoContainer.innerHTML = '<iframe src="https://player.vimeo.com/video/XXXXXX?autoplay=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
        });
    }

    // Smooth scroll para os links de CTA (opcional)
    const ctaLinks = document.querySelectorAll('.cta-link, .cta-button');
    ctaLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Se for apenas para demonstração
            if (link.tagName === 'A' && link.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Redirecionando para o Checkout...');
            }
        });
    });
});
