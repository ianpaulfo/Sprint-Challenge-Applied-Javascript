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

function ArticleObj(article) {
    let outputObj = document.createElement("div");
    let headline = document.createElement("div");
    let authorDiv = document.createElement("div");
    let authorPicDiv = document.createElement("div");
    let authorPic = document.createElement("img");
    let authorName = document.createElement("span");

    outputObj.classList.add("card");
    headline.classList.add("headline");
    authorDiv.classList.add("author");
    authorPicDiv.classList.add("img-container");
    headline.textContent = article.headline;
    authorPic.src = article.authorPhoto;
    authorName.textContent = `By ${article.authorName}`;

    authorPicDiv.append(authorPic);
    authorDiv.append(authorPicDiv);
    authorDiv.append(authorName);

    outputObj.append(headline);
    outputObj.append(authorDiv);

    return outputObj
}


const cardBox = document.querySelector('.cards-container');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    let articlesObj = response.data.articles;
    console.log(articlesObj);
    for (key in articlesObj) {
        articlesObj[key].forEach( item => {cardBox.appendChild(ArticleObj(item));});
      }
    })
    .catch(err => console.log("Problem with articles/axios"));