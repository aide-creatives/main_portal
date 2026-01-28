// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const serviceCards = document.querySelectorAll('.service-card');
const navLinks = document.querySelectorAll('nav a');

// Theme Toggle Functionality
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

themeToggleBtn?.addEventListener('click', toggleTheme);

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// Button Elements
const getStartedBtn = document.getElementById('getStartedBtn');
const exploreServicesBtn = document.getElementById('exploreServicesBtn');
const getQuoteBtn = document.getElementById('getQuoteBtn');
const workWithUsBtn = document.getElementById('workWithUsBtn');
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
const selectPlanButtons = document.querySelectorAll('.select-plan-btn');

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Button click handlers
getStartedBtn?.addEventListener('click', () => scrollToSection('contact'));
exploreServicesBtn?.addEventListener('click', () => scrollToSection('services'));
getQuoteBtn?.addEventListener('click', () => scrollToSection('contact'));
workWithUsBtn?.addEventListener('click', () => scrollToSection('contact'));

// Learn More buttons
learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const serviceName = this.closest('.service-card').querySelector('h3').textContent;
        alert(`More information about ${serviceName} coming soon! In the meantime, please use the contact form for specific questions.`);
    });
});

// Select Plan buttons
selectPlanButtons.forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.closest('.pricing-card').querySelector('h3').textContent;
        alert(`You've selected the ${planName}. Please use the contact form to proceed with your order.`);
    });
});

// Interactive effects for service cards
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'rgba(157, 78, 221, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
    });
});

// Helper function to scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: 'smooth'});
    }
}

// Initialize service cards with hover effects
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        card.style.borderColor = 'rgba(157, 78, 221, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
    });
});

// Add these to the existing logic.js file

// Active navigation highlighting based on scroll position
function updateActiveNav() {
    const navLinks = document.querySelectorAll('nav a.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    let currentSectionId = 'home';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
            currentSectionId = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

// Update on scroll
window.addEventListener('scroll', updateActiveNav);

// Call when page loads
document.addEventListener('DOMContentLoaded', updateActiveNav);

// Enhanced button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Update all "Get Started" buttons to go to contact page
    const getStartedButtons = document.querySelectorAll('.cta-button[id="getStartedBtn"], .cta-button:not([id]):not(.select-plan-btn):not(.submit-btn)');
    getStartedButtons.forEach(button => {
        if (!button.hasAttribute('onclick') && button.id !== 'exploreServicesBtn') {
            button.addEventListener('click', function() {
                window.location.href = 'contact.html';
            });
        }
    });
    
    // Update all "Learn More" buttons in services page
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.closest('.service-card')?.querySelector('h3')?.textContent || 
                               this.closest('.detailed-service')?.querySelector('h3')?.textContent;
            if (serviceName) {
                alert(`More information about ${serviceName} coming soon! In the meantime, please use the contact form for specific questions.`);
            }
        });
    });
    
    // Update all "Select Plan" buttons
    const selectPlanButtons = document.querySelectorAll('.select-plan-btn');
    selectPlanButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.closest('.pricing-card')?.querySelector('h3')?.textContent;
            if (planName) {
                alert(`You've selected the ${planName}. Please use the contact form to proceed with your order.`);
            }
        });
    });
});
