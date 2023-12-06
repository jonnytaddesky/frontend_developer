// async function getRandomWord() {
//   try {
//     const response = await fetch(
//       "https://random-word-api.herokuapp.com/word?number=1"
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch");
//     }
//     const data = await response.json();
//     return data[0]; // Get the first word from the response
//   } catch (error) {
//     console.error("Error fetching random word:", error);
//     return null;
//   }
// }

// function addRandomAltToImages() {
//   const imgElements = document.querySelectorAll("img");
//   imgElements.forEach(async (img) => {
//     const randomWord = await getRandomWord();
//     if (randomWord) {
//       img.alt = randomWord;
//     }
//   });
// }

// // Run the function when the DOM content is loaded
// document.addEventListener("DOMContentLoaded", addRandomAltToImages);

async function addRandomAltToImages() {
  // Fetch a random word
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const data = await response.json();
  const randomWord = data[0];

  // Find all IMG elements on the page
  const images = document.querySelectorAll("img");

  // Loop through each image and add/rewrite the alt attribute with the random word
  images.forEach((image) => {
    image.setAttribute("alt", randomWord);
    image.style.border = "2px solid red"; // Highlight the updated images
  });
}

// Call the function to add random alt attributes to images and highlight them
addRandomAltToImages();
