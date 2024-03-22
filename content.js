
function extractSSDI() {
    const elements = document.querySelectorAll('script[type="application/ld+json"]');
    for (const el of elements) {
      try {
        const parsedData = JSON.parse(el.textContent.trim());
        if (parsedData['@type'] === 'Person') {
          console.log('SSDI JSON Object:', parsedData);
          
          break; 
        }
      } catch (error) {
      
        console.error('Error parsing JSON:', error);
      }
    }
  }
  

  window.addEventListener('DOMContentLoaded', extractSSDI);
  