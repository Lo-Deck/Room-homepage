# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Room-homepage/blob/main/screenshot/Room%20homepage-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Room-homepage/blob/main/screenshot/Room%20homepage-mobile-menu.png).
![screenshot desktop](https://github.com/Lo-Deck/Room-homepage/blob/main/screenshot/Room%20homepage-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Room-homepage).
- Live Site URL: [Website](https://lo-deck.github.io/Room-homepage/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to make a carousel and add a smooth transition when you change the image.

```js
if(position >= 0 ){
    position = -200;       
}
else{
   position += 100;  
}
document.querySelector('.list-image').style.transform = `translateX(${position}%)`;
title.classList.add('anim');
text.classList.add('anim');

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
