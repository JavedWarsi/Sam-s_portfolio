// Portfolio Projects Data
const projects = [
    {
        name: 'Athlet Jack',
        category: 'branding',
        description: 'Energy drink brand identity with bold typography (Myriad Pro Bold) and vibrant yellow color scheme. Dynamic and energetic brand design targeting active lifestyle consumers.',
        color: '#ECC403',
        icon: '⚡'
    },
    {
        name: 'Bold Bean Coffee Co.',
        category: 'branding',
        description: 'Coffee brand with warm, inviting aesthetic. Complete brand identity including logo design, color palette, and brand guidelines for a premium coffee experience.',
        icon: '☕'
    },
    {
        name: 'Essence Perfume',
        category: 'branding',
        description: 'Luxury fragrance branding with elegant design elements. Sophisticated brand identity capturing the essence of premium perfumes with refined visual language.',
        icon: '🌸'
    },
    {
        name: 'Volt Rush',
        category: 'branding',
        description: 'Comfort apparel brand with modern sporty feel. Athletic brand identity combining contemporary design with comfort-focused messaging.',
        icon: '👕'
    },
    {
        name: 'Makeup Infinite',
        category: 'social',
        description: 'Instagram campaign for beauty brand. Eye-catching social media content designed to engage beauty enthusiasts with trendy, colorful visuals.',
        icon: '💄'
    },
    {
        name: 'Nike Air Jordan',
        category: 'social',
        description: 'Big sale promotional social media posts. Dynamic social content showcasing iconic sneakers with bold typography and action-oriented design.',
        icon: '👟'
    },
    {
        name: 'Nourishing Shampoo',
        category: 'packaging',
        description: 'Eco-friendly shampoo packaging with vegan, cruelty-free branding. Clean, natural design emphasizing sustainability and ethical beauty standards.',
        icon: '🌿'
    },
    {
        name: 'Day Roasted Peanuts',
        category: 'packaging',
        description: 'Organic, kosher, non-GMO peanut packaging design. Rustic yet modern packaging highlighting natural ingredients and quality standards.',
        icon: '🥜'
    },
    {
        name: 'Fashion Haul Magazine',
        category: 'print',
        description: 'Urban trend fashion magazine cover design. Editorial layout featuring contemporary fashion trends with sophisticated typography and layout.',
        icon: '📰'
    },
    {
        name: 'Gourmet Burger',
        category: 'print',
        description: 'Restaurant menu and billboard designs. Appetizing food presentation with professional layout design for upscale burger restaurant.',
        icon: '🍔'
    },
    {
        name: 'Gym Fitness',
        category: 'print',
        description: 'Fitness center promotional banners. Motivational design with strong typography and energetic visuals to attract fitness enthusiasts.',
        icon: '💪'
    },
    {
        name: 'Ice Cream Menu',
        category: 'print',
        description: 'Creative menu card design featuring 50+ flavors. Fun, colorful design perfect for ice cream parlor with playful typography and vibrant colors.',
        icon: '🍦'
    }
];

// Typing Effect
const typingTexts = [
    'Graphic Designer',
    'Web Designer',
    'Visual Creator',
    'Brand Specialist'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeText() {
    const typingElement = document.querySelector('#typingText span');
    const currentText = typingTexts[textIndex];
    
    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 100;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typingSpeed = 500;
        }
    }
    
    setTimeout(typeText, typingSpeed);
}

// Create Background Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const colors = ['#B497D6', '#FFB6C1', '#FFB8A7', '#9B7EBD'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 60 + 20 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = Math.random() * 4 + 4 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation
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

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
function observeElements() {
    document.querySelectorAll('.about-text, .timeline-item, .skill-card, .contact-info, .contact-form').forEach(el => {
        observer.observe(el);
    });
}

// Portfolio Functions
function createPortfolioItems() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.setAttribute('data-category', project.category);
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.innerHTML = `
            <div class="portfolio-image" style="${project.color ? `background: linear-gradient(135deg, ${project.color}33 0%, ${project.color}11 100%)` : ''}">
                <span style="font-size: 5rem;">${project.icon}</span>
            </div>
            <div class="portfolio-info">
                <h3>${project.name}</h3>
                <div class="portfolio-category">${getCategoryName(project.category)}</div>
                <p>${project.description}</p>
            </div>
        `;
        
        item.addEventListener('click', () => openModal(project));
        portfolioGrid.appendChild(item);
    });
}

function getCategoryName(category) {
    const categories = {
        'branding': 'Branding & Logo Design',
        'social': 'Social Media Designs',
        'packaging': 'Packaging & Label Design',
        'print': 'Poster & Print Designs'
    };
    return categories[category] || category;
}

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter items
        const filter = button.getAttribute('data-filter');
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Modal Functions
function openModal(project) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 6rem; margin-bottom: 1rem;">${project.icon}</div>
            <h2 style="color: var(--dark-purple); margin-bottom: 0.5rem;">${project.name}</h2>
            <p style="color: var(--primary-purple); font-weight: 500; margin-bottom: 1.5rem;">${getCategoryName(project.category)}</p>
            <p style="line-height: 1.8; color: var(--dark-text);">${project.description}</p>
            ${project.color ? `<div style="margin-top: 2rem;"><strong>Brand Color:</strong> <span style="display: inline-block; width: 30px; height: 30px; background: ${project.color}; border-radius: 5px; vertical-align: middle; margin-left: 10px; border: 2px solid var(--dark-purple);"></span> ${project.color}</div>` : ''}
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:samriddhic30@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
    
    alert('Thank you for your message! Your email client will open to send the message.');
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// Initialize Everything
function init() {
    createParticles();
    createPortfolioItems();
    observeElements();
    setTimeout(typeText, 1000);
}

// Run initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}