// Line numbers functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Line numbers script loaded');
    
    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'line-number-toggle';
    toggleButton.innerHTML = '123';
    toggleButton.title = 'Toggle line numbers';
    toggleButton.setAttribute('aria-label', 'Toggle line numbers');
    
    // Add button to page
    document.body.appendChild(toggleButton);
    console.log('Toggle button added');
    
    // Get main content area - try multiple selectors
    let mainContent = document.querySelector('main.content') || 
                     document.querySelector('main') || 
                     document.querySelector('.content') || 
                     document.querySelector('#quarto-document-content');
    
    if (!mainContent) {
        console.error('Could not find main content area');
        return;
    }
    
    console.log('Main content found:', mainContent);
    
    // Check if line numbers are enabled from localStorage
    const lineNumbersEnabled = localStorage.getItem('lineNumbersEnabled') === 'true';
    if (lineNumbersEnabled) {
        mainContent.classList.add('line-numbers-enabled');
        toggleButton.style.backgroundColor = '#28a745'; // Green when active
        console.log('Line numbers enabled from localStorage');
    }
    
    // Toggle functionality
    toggleButton.addEventListener('click', function() {
        console.log('Toggle button clicked');
        const isEnabled = mainContent.classList.contains('line-numbers-enabled');
        
        if (isEnabled) {
            mainContent.classList.remove('line-numbers-enabled');
            toggleButton.style.backgroundColor = '#3498db';
            localStorage.setItem('lineNumbersEnabled', 'false');
            console.log('Line numbers disabled');
        } else {
            mainContent.classList.add('line-numbers-enabled');
            toggleButton.style.backgroundColor = '#28a745';
            localStorage.setItem('lineNumbersEnabled', 'true');
            console.log('Line numbers enabled');
        }
    });
    
    // Update button color based on theme
    function updateButtonColor() {
        const isDark = document.documentElement.getAttribute('data-quarto-color-scheme') === 'dark';
        if (!mainContent.classList.contains('line-numbers-enabled')) {
            toggleButton.style.backgroundColor = isDark ? '#63b3ed' : '#3498db';
        }
    }
    
    // Listen for theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-quarto-color-scheme') {
                updateButtonColor();
            }
        });
    });
    
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-quarto-color-scheme']
    });
    
    // Initial color update
    updateButtonColor();
    
    console.log('Line numbers script initialization complete');
});