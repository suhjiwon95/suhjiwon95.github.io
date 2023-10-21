# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot


### Links

- Solution URL: [Go to my solution](https://www.frontendmentor.io/solutions/advice-generator-app-Z3RzBRlbMe)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

1. horizontally set elements using 'left: 50%' and 'transform: translateX(-50%)'. 
  - left: 50%: Sets the left edge of .divider-dice-wrapper to the horizontal midpoint of .advice-wrapper.
  - transform: translateX(-50%): Moves .divider-dice-wrapper 50% of its own width to the left, effectively centering it horizontally.

2. Data destructuring
  - const obj = { a: 1, b: 2 };
    const { a, b } = obj;
    // is equivalent to:
    // const a = obj.a;
    // const b = obj.b;


