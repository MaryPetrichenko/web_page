const descriptions = {
  "izbushka.jpg":
    "Somewhere in Karelia, 2021, near a cozy forest hut (izbushka) – the perfect escape, as long as you don’t mind the mosquitoes!",
  "spb.jpg":
    "This photo was taken on a sunny beach near Saint Petersburg, a place we visited often. The Gulf of Finland is truly stunning.",
  "main-photo.jpg": "Nice to meet ya!",
  "moscow.jpg":
    "The first time we were finally allowed to step outside after the pandemic.",
  "snow.jpg":
    "Ah, the good old days of digging a car out of the snow before heading out!",
};

function changeMainImage(imageSrc) {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const photoText = document.querySelector(".photo-text");
  const descriptionElement = document.getElementById("photo-description");

  // Update main image source
  mainImage.src = imageSrc;

  // Update thumbnail selection
  thumbnails.forEach((thumbnail) => thumbnail.classList.remove("selected"));
  const clickedThumbnail = Array.from(thumbnails).find((thumbnail) =>
    thumbnail.src.includes(imageSrc)
  );
  clickedThumbnail.classList.add("selected");

  // Update the description text
  descriptionElement.textContent = descriptions[imageSrc] || "";

  // Reset animation
  photoText.classList.remove("show-description");
  void photoText.offsetWidth; // Trigger reflow
  photoText.classList.add("show-description");

  // Ensure the lines expand when the image is changed
  const topLine = document.querySelector(".top-line");
  const bottomLine = document.querySelector(".bottom-line");

  // Reset animation
  photoText.classList.remove("show-description");
  topLine.classList.remove("show-description");
  bottomLine.classList.remove("show-description");

  // Use setTimeout to re-add the class after a short delay
  setTimeout(() => {
    photoText.classList.add("show-description");
    topLine.classList.add("show-description");
    bottomLine.classList.add("show-description");
  }, 500); // A small delay (e.g., 10ms) ensures the browser recognizes the state change

}