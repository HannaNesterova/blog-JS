// FUNCTION #3

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
  