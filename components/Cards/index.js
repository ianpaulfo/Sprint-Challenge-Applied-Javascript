// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.





  function createCard(info) {
        const 
        card = document.createElement('div');
        articleHeadline = document.createElement('div');
        author = document.createElement('div');
        imgContainer = document.createElement('div');
        imgUrl = document.createElement('img');
        authorName = document.createElement('span');

        card.appendChild(articleHeadline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(imgUrl);
        author.appendChild(authorName);

        imgUrl.src = info.authorPhoto;

        card.classList.add('card');
        articleHeadline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        articleHeadline.textContent = info.headline;
        authorName.textContent = "By " + info.authorName;

        return card;
 } 
 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
     .then((response) => {
         let myCard = document.querySelector('.cards-container');
         let arrayStuff = Object.values(response.data.articles);
         arrayStuff.forEach(element => {
             element.forEach(article => {
                 myCard.appendChild(createCard(article));
                 console.log('Created Card');
             })
         })
     })
     .catch((error) => {
         console.log("data not returned");
         console.log(error);
     })