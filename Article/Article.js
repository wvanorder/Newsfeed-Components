// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    this.removeArticle = domElement.querySelector('.removeArticle');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'click to expand';
    this.removeArticle.textContent = 'click to remove article';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.domElement.addEventListener('click', () => this.expandArticle());
    this.removeArticle.addEventListener('click', () => this.articleDelete());
    this.domElement.addEventListener('mouseenter', () => this.articleScroll());
    this.domElement.addEventListener('mouseleave', () => this.articleScroll());
    this.domElement.addEventListener('scroll', () => this.scrollButton());
    this.domElement.addEventListener('mouseleave', () => this.scrollButtonPutBack());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
this.domElement.classList.toggle('article-open');
this.expandButton.textContent = (this.expandButton.textContent === 'click to expand' ? 'click to close' : 'click to expand');
  }

  articleDelete() {
    this.domElement.classList.toggle('hidden');
    this.expandButton.classList.toggle('overflowexpandButton');
  }

  articleScroll() {
  this.domElement.classList.toggle('overflow');
  this.expandButton.classList.toggle('overflowexpandButton');
  }

  scrollButton() {
    this.expandButton.classList.add('hidden');
  }

  scrollButtonPutBack() {
    this.expandButton.classList.remove('hidden');
  }

}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(function(article){
return new Article(article);
});