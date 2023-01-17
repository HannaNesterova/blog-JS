'use strict';

// ALL CONST
// eslint-disable-next-line one-var
const opts = {
  articleSelector: '.post',
  titleSelector: '.post-title',
  titleListSelector: '.titles',
  articleTagsSelector: '.post-tags .list',
  articleAuthorSelector: '.post-author',
  tagsListSelector: '.tags.list',
  cloudClassCount: 5,
  cloudClassPrefix: 'tag-size-',
  authorsListSelector: '.authors.list'
};

// FUNCTION #1 TITLE_CLICK_HANDLER
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

// FUNCTION #2 GENERATE_TITLE_LINKS
function generateTitleLinks (customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(opts.titleListSelector);

  function clearMessage () {
    titleList.innerHTML = '';
  }
  clearMessage();

  /* for each article */

  const articles = document.querySelectorAll(opts.articleSelector + customSelector);
  articles.forEach((article) => {
    /* get the article id */
    const articleId = article.id;

    /* find the title element */
    const articleTitle = article.querySelector(opts.titleSelector);
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

// FUNCTION #5 GENERATE_TAGS
function generateTags () {
  /* [NEW] create a new variable allTags with an empty object */
  const allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(opts.articleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
  /* find tags wrapper */
    const tagsWrapper = article.querySelector(opts.articleTagsSelector);
    /* make html variable with empty string */
    let html = ' ';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const link = '<li><a href = "#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html = ' ' + link;
      /* [NEW] check if this link is NOT already in allTags */
      if (!allTags.hasOwnProperty(tag)) {
      /* [NEW] add generated code to allTags objact */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      /* END LOOP: for each tag */
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = tagsWrapper.innerHTML + html;
    }
    /* END LOOP: for every article: */
  }

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(opts.tagsListSelector);
  /* [NEW] add html from allTags to tagList */

  // [NEW] create variables for all links HTML code
  const tagsParams = calculateTagsParams(allTags);
  let allTagsHTML = '';
  // [NEW] START LOOP: for each tah in allTags
  for (let tag in allTags) {
    // [NEW] generate code for all links and add it to allTagsHTML
    allTagsHTML += '<li><a href="#tag-' + tag + ' ">' + tag + '(' + allTags[tag] + ')' + '</a></li>';
    // allTagsHTML += tagLinkHTML;- i'm not sure about this
  }
  // [NEW] add HTML from allTagsHTML to tagList
  tagList.innerHTML = allTagsHTML;
  // FUNCTION #3 MIN AND MAX FOR TAGS
  function calculateTagsParams (tags) {
    const params = { max: 0, min: 999999 };
    for (const tag in tags) {
      params.max = Math.max(tags[tag], params.max);
      params.min = Math.min(tags[tag], params.min);
    }
    return params;
  }
  // FUNCTION #4 CALCULATE_TAG_CLASS
  function calculateTagClass (count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor(percentage * (opts.cloudClassCount - 1) + 1);
  }
}
generateTags();

// FUNCTION#5 FOR CLICKED TAG
function tagClickHandler (e) {
  /* prevent default action for this event */
  e.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (const activeTagLink of activeTagLinks) {
  /* remove class active */
    activeTagLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const allTaglinks = href.querySelectorAll('href');
  /* START LOOP: for each found tag link */
  for (const tagLink of allTaglinks) {
    /* add class active */
    tagLink.classList.add('active');
  }
  /* END LOOP: for each found tag link */
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags () {
  /* find all links to tags */
  const linksToTag = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each link */
  for (const linkToTag of linksToTag) {
    /* add tagClickHandler as event listener for that link */
    linkToTag.addEventListener('click', tagClickHandler);
  }
  /* END LOOP: for each link */
}
addClickListenersToTags();

// FUNCTION #6 GENERATE_AUTHORS

function generateAuthors () {
  /* [NEW] create a new variable allAuthors with an empty array */
  let allAuthors = [];
  /* find all articles */
  const articles = document.querySelectorAll(opts.articleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagWrapperAuthor = article.querySelector(opts.articleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTagAuthor = article.getAttribute('data-author');
    /* generate HTML of the link */
    const link = '<a href ="#author-' + articleTagAuthor + '">' + articleTagAuthor + '</a>';
    /* add generated code to html variable */
    html = html + link;
    /* [NEW] check if this link is NOT already in allTags */
    if (!allAuthors.hasOwnProperty(articleTagAuthor)) {
      /* [NEW] add generated code to allTags objact */
      allAuthors[articleTagAuthor] = 1;
    } else {
      allAuthors[articleTagAuthor]++;
    }
    // insert HTML of all the links into the tags wrappwr
    tagWrapperAuthor.innerHTML = html;

    // /* [NEW] check if this link is NOT already in allAuthors */
    if (allAuthors.indexOf(link) === -1) {
    //   /* [NEW] add generated code to allAuthors array */
      allAuthors.push(link);
    }
  }
  // [NEW] find list of tags in right column */
  const authorList = document.querySelector(opts.authorsListSelector);
  let allAuthorsHTML = '';
  /* [NEW] add html from allAuthors to authorList */
  authorList.innerHTML = allAuthors.join(' ');

  for (let link in allAuthors) {
    // [NEW] generate code for all links and add it to allTagsHTML
    allAuthorsHTML += '<li><a href=#authors-' + link + ' ">' + '(' + allAuthors[link] + ')' + '</a></li>';
    // allTagsHTML += tagLinkHTML;- i'm not sure about this
  }
  // [NEW] add HTML from allTagsHTML to tagList
  authorList.innerHTML = allAuthorsHTML;
}

generateAuthors();

// FUNCTION #7 AUTHOR_CLICK_HANDLER
function authorClickHandler (e) {
  e.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const tag = href.replace('#author-', '');
  const tagLinks = document.querySelectorAll('a.active[href^="#author-"]');
  // eslint-disable-next-line prefer-const
  for (let tagLink of tagLinks) {
    tagLink.classList.remove('active');
  }
  const allTagLinks = href.querySelectorAll('a[href="' + href + '"]');
  // eslint-disable-next-line prefer-const
  for (let tagLink of allTagLinks) {
    tagLink.classList.add('active');
  }
  generateAuthors('[data-authour="' + tag + '"]');
}
authorClickHandler();

// FUNCTION #8 CLICK
function addClickListenersToAuthors () {
  const allTagLinks = document.querySelectorAll('.post-author a');
  for (const allTagLink of allTagLinks) {
    allTagLink.addEventListener('click', authorClickHandler);
  }
}

addClickListenersToAuthors();
