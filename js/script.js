'use strict';

// function titleClickHandler(event){
//     event.preventDefault();
//     const clickedElement = this;
   
//     /* [DONE] remove class 'active' from all article links  */
//     const activeLinks = document.querySelectorAll('.titles a.active');
//     for(let activeLink of activeLinks){
//         activeLink.classList.remove('active');
//     }
//   /* [DONE] remove class 'active' from all articles */
//     const activeArticles=document.querySelectorAll('.post.active');
//     for(let activeArticle of activeArticles){
//         activeArticle.classList.remove('active');
//     }
//   /*[DONE] add class 'active' to the clicked link */
//     const addActiveLinks = clickedElement;
//     addActiveLinks.classList.add('active');

//      /* [DONE] get 'href' attribute from the clicked link */
//     const articleSelector=clickedElement.getAttribute('href');

//   /* * [DONE] find the correct article using the selector (value of 'href' attribute) */
//     const targetArticle=document.querySelector(articleSelector);

//   /*  [DONE]  add class 'active' to the correct article */
//     targetArticle.classList.add('active');
//     }

    
//   const links = document.querySelectorAll('.titles a');
//   for(let link of links){
//     link.addEventListener('click', titleClickHandler);
//   }


const optArticleSelector = document.querySelector('.post');
const optTitleSelector = document.querySelector('.post-title');
const optTitleListSelector = document.querySelector('.titles'); 

function generateTitleLinks (){

/* [DONE]remove contents of titleList */
const titleList = optTitleListSelector;

function clearMessages(){
	titleList.querySelectorAll('*').forEach((titleList)=> titleList.remove());
}
clearMessages(); 

  /* I[DONE]for each article */
  const articles=document.querySelectorAll('.post');
  console.log (articles);
  for (let article of articles){
    /* [DONE]get the article id */
    const articleID = Array.from(document.querySelectorAll([".post"]));
    console.log(articleID);
     /*[DONE] find the title element */
     const articleTitle = document.querySelectorAll('.post-title').innerHTML;
     console.log(articleTitle);
   }

      

      /* for each article */
   

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

  }
generateTitleLinks();
