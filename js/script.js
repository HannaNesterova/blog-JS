'use strict';

function titleClickHandler(e){
e.preventDefault();
const clickedElement = this;
   
/* [DONE] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');
for(let activeLink of activeLinks){
activeLink.classList.remove('active');
}
/* [DONE] remove class 'active' from all articles */
const activeArticles=document.querySelectorAll('.post.active');
for(let activeArticle of activeArticles){
activeArticle.classList.remove('active');
}
 /*[DONE] add class 'active' to the clicked link */
 const addActiveLinks = clickedElement;
addActiveLinks.classList.add('active');

/* [DONE] get 'href' attribute from the clicked link */
const articleSelector=clickedElement.getAttribute('href');

/* * [DONE] find the correct article using the selector (value of 'href' attribute) */
const targetArticle=document.querySelector(articleSelector);

/*  [DONE]  add class 'active' to the correct article */
targetArticle.classList.add('active');
}

    


//SECOND PART OF THE JS CODE

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  function clearMessage() {
    titleList.innerHTML = "";
  }
  clearMessage();

  /* for each article */

const articles = document.querySelectorAll(optArticleSelector);
articles.forEach((article) => {

      /* get the article id */
const articleId = article.id;

    /* find the title element */
const articleTitle = article.querySelector(optTitleSelector);
    
/* get the title from the title element */
const getTitle = articleTitle.innerHTML;
    
/* create HTML of the link */
const createLink =`
  <li>
    <a href= "#${articleId}">
      <span>${getTitle}</span>
    </a>
  </li>
`;
   
/* insert link into titleList */
titleList.innerHTML = titleList.innerHTML +createLink;
  })
}

generateTitleLinks();


const links = document.querySelectorAll('.titles a');
for(let link of links){
link.addEventListener('click', titleClickHandler);
}