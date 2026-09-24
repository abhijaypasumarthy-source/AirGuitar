// Simple interaction for the futuristic UI

document.addEventListener('DOMContentLoaded', () => {
    
    // Add subtle glow effect following cursor on cards
    const cards = document.querySelectorAll('.card, .timeline-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 240, 255, 0.1), #151520 40%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = '#151520';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
