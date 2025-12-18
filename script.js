const items = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (itemTop < triggerPoint) {
            item.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Trigger on load
