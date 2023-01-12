'use strict';

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

function generateTags () {
  /* find all articles */
  // eslint-disable-next-line no-unused-vars
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* START LOOP: for every article: */
  // eslint-disable-next-line no-unused-vars
  for (let article of articles) {
  /* find tags wrapper */
    // eslint-disable-next-line no-unused-vars
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log(tagsWrapper);
    /* make html variable with empty string */
    let html = ' ';
    console.log(html);
    /* get tags from data-tags attribute */
    // eslint-disable-next-line no-unused-vars
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log(tag);
      /* generate HTML of the link */
      const link = '<li><a href = "#tag-' + tag + '">' + tag + '</a></li>';
      console.log(link);
      /* add generated code to html variable */
      let html = ' ' + link;
      console.log(html);
      /* END LOOP: for each tag */
      article.innerHTML = article.innerHTML + html;
    }
  }
}


  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */

generateTags();
