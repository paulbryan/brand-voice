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

// Launch AgentApp function
function launchAgentApp() {
    // Show instructions for running the AgentApp
    const overlay = document.querySelector('.iframe-overlay');
    const iframe = document.getElementById('brandvoice-iframe');

    // Show loading message
    const message = document.querySelector('.iframe-message');
    message.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 20px;">🎯</div>
            <h3>How to Run BrandVoice AgentApp</h3>
            <p>Loading instructions...</p>
        </div>
    `;

    // Show instructions in iframe
    setTimeout(() => {
        // Show instructions for accessing the AgentApp
        iframe.srcdoc = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                        padding: 40px;
                        background: linear-gradient(135deg, #f6f8fb 0%, #eef2f7 100%);
                        margin: 0;
                    }
                    .app-container {
                        max-width: 800px;
                        margin: 0 auto;
                        background: white;
                        padding: 40px;
                        border-radius: 20px;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    }
                    h1 {
                        color: #2d3748;
                        margin-bottom: 20px;
                    }
                    .gradient-text {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .info-box {
                        background: #f7fafc;
                        border-left: 4px solid #667eea;
                        padding: 20px;
                        margin: 20px 0;
                        border-radius: 8px;
                    }
                    .phase-selector {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                        margin: 30px 0;
                    }
                    .phase-card {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: 30px;
                        border-radius: 16px;
                        cursor: pointer;
                        transition: transform 0.2s;
                        text-align: center;
                    }
                    .phase-card:hover {
                        transform: translateY(-5px);
                    }
                    .phase-icon {
                        font-size: 48px;
                        margin-bottom: 12px;
                    }
                    .phase-title {
                        font-size: 24px;
                        font-weight: 700;
                        margin-bottom: 8px;
                    }
                    .phase-desc {
                        font-size: 14px;
                        opacity: 0.9;
                    }
                    code {
                        background: #f0e7ff;
                        padding: 2px 8px;
                        border-radius: 4px;
                        font-family: 'Courier New', monospace;
                        color: #764ba2;
                    }
                    .instructions {
                        margin-top: 30px;
                        padding: 20px;
                        background: #fefcbf;
                        border-radius: 12px;
                        border: 1px solid #f6e05e;
                    }
                    .instructions h3 {
                        color: #744210;
                        margin-bottom: 12px;
                    }
                    .instructions ol {
                        color: #744210;
                        padding-left: 20px;
                    }
                    .instructions li {
                        margin-bottom: 8px;
                        line-height: 1.6;
                    }
                    .creao-link {
                        display: inline-block;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: 12px 24px;
                        border-radius: 8px;
                        text-decoration: none;
                        font-weight: 600;
                        margin-top: 20px;
                        transition: transform 0.2s;
                    }
                    .creao-link:hover {
                        transform: translateY(-2px);
                    }
                </style>
            </head>
            <body>
                <div class="app-container">
                    <h1>🎯 <span class="gradient-text">BrandVoice AgentApp</span></h1>

                    <div class="info-box">
                        <strong>AgentApp ID:</strong> <code>TMXhceRjWM</code><br>
                        <strong>Platform:</strong> CREAO AgentApp Framework
                    </div>

                    <h2>Choose Your Workflow</h2>
                    <div class="phase-selector">
                        <div class="phase-card">
                            <div class="phase-icon">🪞</div>
                            <div class="phase-title">Phase 1: The Mirror</div>
                            <div class="phase-desc">Analyze your brand voice from 3-5 content samples</div>
                        </div>
                        <div class="phase-card">
                            <div class="phase-icon">✨</div>
                            <div class="phase-title">Phase 2: The Match</div>
                            <div class="phase-desc">Transform drafts using your saved voice profile</div>
                        </div>
                    </div>

                    <div class="instructions">
                        <h3>📋 How to Run This AgentApp</h3>
                        <ol>
                            <li><strong>Access CREAO Platform:</strong> Go to <a href="https://creao.com" target="_blank" style="color: #667eea;">creao.com</a> and sign in</li>
                            <li><strong>Open AgentApp:</strong> Navigate to AgentApps or use the launcher</li>
                            <li><strong>Enter ID:</strong> Use AgentApp ID: <code>TMXhceRjWM</code></li>
                            <li><strong>Choose Phase:</strong> Select Mirror (analyze) or Match (transform)</li>
                            <li><strong>Fill Form:</strong> Provide content samples or draft to transform</li>
                            <li><strong>Run & Enjoy:</strong> Get your voice analysis or transformed content!</li>
                        </ol>
                        <div style="margin-top: 20px; padding: 15px; background: rgba(102, 126, 234, 0.1); border-radius: 8px; border-left: 4px solid #667eea;">
                            <strong style="color: #667eea;">💡 Pro Tip:</strong> If you're using CREAO for the first time, you may need to create an account or access your workspace first. The AgentApp ID (<code>TMXhceRjWM</code>) will work in any CREAO workspace.
                        </div>
                    </div>

                    <div style="margin-top: 30px; padding: 20px; background: #f7fafc; border-radius: 12px;">
                        <h3 style="color: #2d3748; margin-bottom: 12px;">💡 Quick Start Examples</h3>

                        <p style="margin-bottom: 16px;"><strong>Phase 1 - Create Voice Profile:</strong></p>
                        <ul style="color: #4a5568; line-height: 1.8;">
                            <li>Profile Name: "My LinkedIn Voice"</li>
                            <li>Sample 1: Paste your best LinkedIn post</li>
                            <li>Sample 2: Paste another viral post</li>
                            <li>Sample 3: Link to a newsletter article</li>
                        </ul>

                        <p style="margin: 20px 0 16px;"><strong>Phase 2 - Transform Content:</strong></p>
                        <ul style="color: #4a5568; line-height: 1.8;">
                            <li>Selected Profile: "My LinkedIn Voice"</li>
                            <li>Draft: Paste your bland corporate announcement</li>
                            <li>Get: Transformed content in your authentic voice!</li>
                        </ul>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Hide overlay
        overlay.style.display = 'none';
    }, 1500);
}

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.problem-card, .feature-card, .step-card, .use-case-card, .testimonial-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Track scroll for navbar shadow
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Console message for developers
console.log('%c🎯 BrandVoice', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cAgentApp ID: TMXhceRjWM', 'font-size: 14px; color: #764ba2;');
console.log('%cBuilt on CREAO Platform', 'font-size: 12px; color: #718096;');
console.log('%cLearn more: https://creao.com', 'font-size: 12px; color: #718096;');
