/* SF Chicken Co. JavaScript */

document.addEventListener("DOMContentLoaded", () => {
    // IntersectionObserver for lazy loading and scroll-reveal animations
    const observerOptions = {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Lazy load images inside the revealing element
                const lazyImages = entry.target.querySelectorAll('img.lazy');
                lazyImages.forEach(img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        img.classList.remove('lazy');
                    }
                });

                // Trigger the reveal animation
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the 'reveal' class
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Initial state
    switchTab('products');

    // Intercept Nav clicks for Tabs
    document.querySelectorAll('a[href="#products"], a[href="#distribution"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.getAttribute('href').substring(1);
            switchTab(tab);
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Tab Switching Logic
function switchTab(tab) {
    const productsContent = document.getElementById('content-products');
    const distributionContent = document.getElementById('content-distribution');
    const productsBtn = document.getElementById('tab-products');
    const distributionBtn = document.getElementById('tab-distribution');

    if (!productsContent || !distributionContent || !productsBtn || !distributionBtn) return;

    if (tab === 'products') {
        // Update Buttons
        productsBtn.classList.add('bg-primary', 'text-on-primary', 'shadow-lg');
        productsBtn.classList.remove('text-on-surface-variant');
        distributionBtn.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');
        distributionBtn.classList.add('text-on-surface-variant');

        // Update Content
        productsContent.classList.remove('inactive');
        productsContent.classList.add('active');
        distributionContent.classList.remove('active');
        distributionContent.classList.add('inactive');
    } else {
        // Update Buttons
        distributionBtn.classList.add('bg-primary', 'text-on-primary', 'shadow-lg');
        distributionBtn.classList.remove('text-on-surface-variant');
        productsBtn.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');
        productsBtn.classList.add('text-on-surface-variant');

        // Update Content
        distributionContent.classList.remove('inactive');
        distributionContent.classList.add('active');
        productsContent.classList.remove('active');
        productsContent.classList.add('inactive');
    }
}
