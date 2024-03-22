const getJokes = async() =>{
    try{
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myJoke = document.querySelector('#myJoke');
         myJoke = data.value;
   
        myJoke.innerHTML = data.value;
    }catch(error){

    }

}
window.addEventListener("load", ()=>{
    getJokes();
})



// function extractSSDI() {
//     const elements = document.querySelectorAll('script[type="application/ld+json"]');
//     for (const el of elements) {
//       try {
//         const parsedData = JSON.parse(el.textContent.trim());
//         if (parsedData['@type'] === 'Person') {
//           console.log('SSDI JSON Object:', parsedData);
          
//           break; 
//         }
//       } catch (error) {
      
//         console.error('Error parsing JSON:', error);
//       }
//     }
//   }
  

// //   window.addEventListener('DOMContentLoaded', extractSSDI);

// window.addEventListener("load", ()=>{
//     extractSSDI();
// })