'use strict';

// FUNCTION #1

function titleClickHandler (e) {
  e.preventDefault();
  const clickedElement = this;
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (const activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for (const activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */
  const addActiveLinks = clickedElement;
  addActiveLinks.classList.add('active');

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /* * [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /*  [DONE]  add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

// SECOND PART OF THE JS CODE

// eslint-disable-next-line one-var
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  // eslint-disable-next-line no-unused-vars
  optArticleTagsSelector = '.post-tags .list';

// FUNCTION #2

function generateTitleLinks () {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  function clearMessage () {
    titleList.innerHTML = '';
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
    const createLink = `
  <li>
    <a href= "#${articleId}">
      <span>${getTitle}</span>
    </a>
  </li>
`;
    /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + createLink;
  });
}
generateTitleLinks();

const links = document.querySelectorAll('.titles a');
// eslint-disable-next-line prefer-const
for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

// FUNCTION #3

function generateTags () {
  /* find all articles */
  // eslint-disable-next-line no-unused-vars
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  // eslint-disable-next-line no-unused-vars
  for (let article of articles) {
  /* find tags wrapper */
    // eslint-disable-next-line no-unused-vars
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = ' ';
    /* get tags from data-tags attribute */
    // eslint-disable-next-line no-unused-vars
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const link = '<li><a href = "#tag-' + tag + '">' + tag + '</a></li>';
      console.log(link);
      /* add generated code to html variable */
      let html = ' ' + link;
      /* END LOOP: for each tag */
      article.innerHTML = article.innerHTML + html;
    }
  }
}
/* insert HTML of all the links into the tags wrapper */

/* END LOOP: for every article: */
generateTags();

// FUNCTION#4 FOR CLICKED TAG

function tagClickHandler (e) {
  /* prevent default action for this event */
  e.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const readHref = clickedElement.getAttribute('href');
  console.log(readHref);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const extractTag = 
  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();