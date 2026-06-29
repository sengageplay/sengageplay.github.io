document.addEventListener("DOMContentLoaded", function() {
    // Create a footer element for the disclaimer
    const footer = document.createElement('footer');
    
    // Style it to match your dark theme perfectly
    footer.style.textAlign = 'center';
    footer.style.padding = '40px 20px';
    footer.style.fontSize = '0.95rem';
    footer.style.color = '#a1a1aa'; // Light gray text for dark mode
    footer.style.borderTop = '2px solid #1a1a1e'; // Clean dark separator line
    footer.style.marginTop = '50px';
    footer.style.fontFamily = "'Segoe UI', system-ui, sans-serif";
    footer.style.lineHeight = '1.5';
    
    // Insert your ARASAAC text with a styled link
    footer.innerHTML = '<p style="max-width: 800px; margin: 0 auto;">The pictographic symbols used are the property of the Government of Aragon and were created by Sergio Palao for <a href="http://www.arasaac.org" target="_blank" rel="noopener noreferrer" style="color: #4ade80; text-decoration: underline;">ARASAAC</a>, which distributes them under a Creative Commons BY-NC-SA License.</p>';
    
    // Add it to the bottom of the webpage
    document.body.appendChild(footer);
});
