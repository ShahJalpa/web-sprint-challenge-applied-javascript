  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios"; //import dependeancy
import {articles} from "../mocks/data";


const Card = (article) => {

    /*<----------   create document element   ----------------->*/ 
    const cardDiv = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div")
    const authorPhoto = document.createElement("img");
    const authorName = document.createElement("span");

    //<------------------------ setup like HTML format shown above -------------->
    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(authorPhoto);

    //<----------------- set up class ---------------->
    cardDiv.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    //<--------- text content, img src ------------->
    headline.textContent = article.headline;
    authorPhoto.setAttribute('src', article.authorPhoto);
    authorName.textContent = `By ${article.authorName}`;

    //<------------ adding event listener ---------------->
    cardDiv.addEventListener('click', () =>{
      console.log(headline);
    })

    //<----------- return cardDiv ------------>
    return cardDiv;
}   

// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  axios
      .get(`https://lambda-times-api.herokuapp.com/articles`)
      .then((response) => {
        console.log(response);
        //------------- getting main TOPICS object array from articles object first before getting their own array elements ---------
        const articleObj = response.data.articles;
        const javaScriptArray = articleObj.javascript;
        const bootstrapArray = articleObj.bootstrap;
        const jQueryArray = articleObj.jquery;
        const nodeArray = articleObj.node;
        const technologyArray = articleObj.technology;

        //----------- now with loop on each TOPICS array getting the information using card component ------------
        javaScriptArray.forEach(info => {
          const jsCard = Card(info);
          document.querySelector(selector).appendChild(jsCard);
        });

        bootstrapArray.forEach(info => {
          const bsCard = Card(info);
          document.querySelector(selector).appendChild(bsCard);
        });

        jQueryArray.forEach(info => {
          const jqard = Card(info);
          document.querySelector(selector).appendChild(jqard);
        });

        nodeArray.forEach(info => {
          const ndCard = Card(info);
          document.querySelector(selector).appendChild(ndCard);
        });

        technologyArray.forEach(info => {
          const tcnCard = Card(info);
          document.querySelector(selector).appendChild(tcnCard);
        });
      })
      .catch((error) => {
        console.log("something went wrong", error);
      })
  
  /*articles.forEach(article=> {
    axios
      .get(`https://lambda-times-api.herokuapp.com/articles`)
      .then((response) => {
        article = Card(response)
        console.log(response);
        const newCards = Card(article);
        document.querySelector(selector).appendChild(newCards);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      })
  });*/
      
}

export { Card, cardAppender }
