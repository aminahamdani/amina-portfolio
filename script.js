// Initialize AOS (Animate On Scroll)
AOS.init({
    once: true,
    offset: 50,
    duration: 800
});

// ============================================
// Smooth Scrolling for Internal Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================ 
// Dark Mode Toggle
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const bodyElement = document.body;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark-mode');
    bodyElement.classList.add('dark-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', function () {
    htmlElement.classList.toggle('dark-mode');
    bodyElement.classList.toggle('dark-mode');
    
    const theme = htmlElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// ============================================
// Contact Form Handler
// ============================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('form-message');
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.classList.remove('success');
            formMessage.classList.add('error');
            return;
        }
        
        if (!emailRegex.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.remove('success');
            formMessage.classList.add('error');
            return;
        }
        
        // Simulate form submission (in production, send to backend)
        console.log('Form submitted:', { name, email, message });
        
        formMessage.textContent = `Thank you, ${name}! I've received your message and will get back to you soon.`;
        formMessage.classList.remove('error');
        formMessage.classList.add('success');
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success', 'error');
        }, 5000);
    });
}

// ============================================
// Gas Station ROI Chart with Enhanced Features
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const roiChartElement = document.getElementById('roiChart');
    
    if (roiChartElement) {
        const ctx = roiChartElement.getContext('2d');

        const roiChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [{
                    label: 'Projected ROI (%)',
                    data: [5, 12, 18, 24, 32],
                    backgroundColor: '#14b8a6', // Teal
                    borderRadius: 4,
                    order: 2,
                    borderColor: '#0d9488',
                    borderWidth: 1
                },
                {
                    label: 'Net Cash Flow ($k)',
                    data: [20, 45, 80, 110, 150],
                    type: 'line',
                    borderColor: '#94a3b8', // Light Slate Grey
                    backgroundColor: 'rgba(148, 163, 184, 0.1)',
                    borderWidth: 3,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#94a3b8',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.3,
                    yAxisID: 'y1',
                    order: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        titleFont: { family: 'Inter', size: 13 },
                        bodyFont: { family: 'Inter', size: 13 },
                        padding: 12,
                        cornerRadius: 6,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.dataset.yAxisID === 'y1' ? '$' + context.parsed.y + 'k' : context.parsed.y + '%';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: { family: 'Inter' }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'ROI %' },
                        grid: {
                            borderDash: [5, 5],
                            color: '#f1f5f9'
                        },
                        ticks: {
                            font: { family: 'Inter' }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { display: true, text: 'Cash Flow ($k)' },
                        grid: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            font: { family: 'Inter' }
                        }
                    }
                }
            }
        });
    }
});

