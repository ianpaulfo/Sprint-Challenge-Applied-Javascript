/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel(imageArray) {
  let parentDiv = document.createElement('div')
  parentDiv.classList.add("carousel")
  let activeIndex = 0

  let leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  leftButton.textContent = '<='
  leftButton.addEventListener("click", _ => {
    let imageArray = document.querySelectorAll(".carousel img")
    imageArray.forEach(img => (img.style.display = "none"));
    console.log(activeIndex)
    if 
      (activeIndex < 1)
      {activeIndex = 3}
    else
      {activeIndex--;}  
      imageArray[activeIndex].style.display = "block";
  });

  let rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  rightButton.textContent = '=>'
  rightButton.addEventListener("click", () => {
    let imageArray = document.querySelectorAll(".carousel img")
    imageArray.forEach(img => (img.style.display = "none"));
    console.log(activeIndex)
    if 
      (activeIndex > 2)
      {activeIndex = 0;}
    else 
      {activeIndex++;}   
      imageArray[activeIndex].style.display = "block";
  });

  parentDiv.append(leftButton);
  parentDiv.append(rightButton);

  imageArray.forEach(picUrl => {
    let newImg = document.createElement('img');
    newImg.src = picUrl;
    parentDiv.append(newImg);
  })
  return parentDiv
}

let images = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']
  document.querySelector('.carousel-container').append(Carousel(images))
  document.querySelector(".carousel img").style.display = "block" 
