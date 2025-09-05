// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Mobile menu functionality
const mobileMenu = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active link highlighting
const sections = document.querySelectorAll('.component-section');
const navLinks = document.querySelectorAll('.sidebar-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Form data:', data);
        // Add your form submission logic here
    });
});

// Tooltip initialization
const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', () => {
        const tooltipText = tooltip.getAttribute('data-tooltip');
        if (!tooltipText) return;

        const tooltipEl = document.createElement('div');
        tooltipEl.className = 'tooltip-content';
        tooltipEl.textContent = tooltipText;
        tooltip.appendChild(tooltipEl);
    });

    tooltip.addEventListener('mouseleave', () => {
        const tooltipContent = tooltip.querySelector('.tooltip-content');
        if (tooltipContent) {
            tooltipContent.remove();
        }
    });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 100);
}); 