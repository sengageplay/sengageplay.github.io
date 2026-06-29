document.addEventListener("DOMContentLoaded", function() {
    // Create a footer element for the disclaimer
    const footer = document.createElement('footer');
    
    // Style it so it looks neat and stays at the bottom
    footer.style.textAlign = 'center';
    footer.style.padding = '30px 20px';
    footer.style.fontSize = '12px';
    footer.style.color = '#555';
    footer.style.borderTop = '1px solid #eee';
    footer.style.marginTop = '40px';
    
    // Insert your ARASAAC text with the correct link
    footer.innerHTML = '<p>The pictographic symbols used are the property of the Government of Aragon and were created by Sergio Palao for <a href="http://www.arasaac.org" target="_blank" rel="noopener noreferrer">ARASAAC</a>, which distributes them under a Creative Commons BY-NC-SA License.</p>';
    
    // Add it to the bottom of the webpage
    document.body.appendChild(footer);
});
