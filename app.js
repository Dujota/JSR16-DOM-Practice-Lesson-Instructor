// Element Selectors
/**
 * select an element by id - getElementById / querySelector
 * select an element by class - querySelector
 * select an element by tag name - querySelector
 * select multiple elements by class or tag  - querySelectorAll
 */

const ctaMainBtn = document.querySelector('#cta-main');
const introSection = document.querySelector('.intro-section');
const introTitle = document.querySelector('#intro-title');
const introText = document.querySelector('.intro-text');
const colorChanger = document.querySelector('#color-changer');
const addCommentBtn = document.querySelector('#add-comment');
// const commentInput = document.querySelector('#comment-input');
const commentInput = document.querySelector('input[type="text"]');
const commentsList = document.querySelector('#comments-list');

// const personName = prompt('What is your name?');

// Event Handlers
const addText = (event) => {
  // console.log(event);
  // document.body.append('I have been clicked!');
  // introSection.append('I have been clicked!');
  introTitle.innerText = 'DOM Events';
  introText.innerText = `Hello ${personName}`;
};

const changeClass = (event) => {
  introSection.classList.toggle('red');
};

const addComment = (event) => {
  // console.log('hey !!!!', event);
  // Method 1
  const comment = document.createElement('li');

  if (commentInput.value) {
    const commentText = commentInput.value;
    comment.innerText = commentText;
    commentsList.append(comment);
    commentInput.value = '';
  }

  // Method 2
};

// Event Listeners
ctaMainBtn.addEventListener('click', addText);
colorChanger.addEventListener('click', changeClass);
addCommentBtn.addEventListener('click', addComment);

// CAREFULL WITH GENERIC SELECTORS!!!
// document.querySelector('button').addEventListener('click', (evt) => {
//   // testing!
//   console.log('HEY TEHRE!!!!!', evt);
// });
