// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if(window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Generic Reserve alert function
    function showReserveMessage() {
        alert("✨ Your reservation request has been noted. A heritage concierge will contact you shortly.");
    }

    // Attach to all reservation buttons
    const reserveBtns = document.querySelectorAll('.reserve-main-btn, .reserve-vehicle-btn, .pillar-reserve-btn, .testimonial-reserve, .secondary-reserve, .legacy-reserve, .spotlight-reserve-btn');
    reserveBtns.forEach(btn => {
        btn.addEventListener('click', showReserveMessage);
    });

    // Explore Sales & Explore Fleet buttons
    const exploreSalesBtn = document.querySelector('.explore-sales-btn');
    if(exploreSalesBtn) {
        exploreSalesBtn.addEventListener('click', () => {
            alert("🚗 Our sales collection features bespoke automotive masterpieces. Contact our specialists for a private viewing.");
        });
    }

    const exploreNowBtn = document.querySelector('.explore-now-btn');
    if(exploreNowBtn) {
        exploreNowBtn.addEventListener('click', () => {
            const fleetSection = document.getElementById('fleet');
            if(fleetSection) fleetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Gold glow button additional
    const goldBtn = document.querySelector('.btn-gold-glow');
    if(goldBtn) {
        goldBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const rentals = document.getElementById('rentals');
            if(rentals) rentals.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    console.log("Heritage in Motion — Ready. The Elite Standard awaits.");
});