const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  /*<----------   create document element   ----------------->*/ 
  const mainHeader = document.createElement("div");
  const spanDate = document.createElement("span");
  const h1Title = document.createElement("h1");
  const spanTemp = document.createElement("span");

  //<------------------------ setup like HTML format shown above -------------->
  mainHeader.appendChild(spanDate);
  mainHeader.appendChild(h1Title);
  mainHeader.appendChild(spanTemp);

  //<----------------- set up class ---------------->
  mainHeader.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  //<--------- text content ------------->
  spanDate.textContent = date;
  h1Title.textContent = title
  spanTemp.textContent = temp;

  return mainHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const header = Header('Lambda Times', 'January 6, 2021', '26');
  document.querySelector(selector).appendChild(header);
}

export { Header, headerAppender }
