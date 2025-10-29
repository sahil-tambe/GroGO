// dashboard.js — moved from inline script in dashboard.html

// Tab switching functionality
document.querySelectorAll('.ride-tabs a').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.ride-tabs a').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Smooth form interaction
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.background = '#efefef';
    });
    input.addEventListener('blur', function() {
        this.parentElement.style.background = '#f7f7f7';
    });
});

// Button interactions
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Feature coming soon!');
    });
});
