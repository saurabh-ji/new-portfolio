// Mobile menu toggle
document.querySelector('.mobile-menu')?.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(this.getAttribute('href') !== '#') {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Active link highlighting
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if((currentPage === 'index.html' && linkPage === 'index.html') || 
       (currentPage !== 'index.html' && linkPage.includes(currentPage))) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
