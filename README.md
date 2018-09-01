

# Overview

This is a single-page app implementation of Hangman, built in React. The app has two primary components - the main menu, and the game itself. The main menu provides an explanation of the game, and also the option to choose a difficulty level. Once a player has done so, the game begins.

The game’s interface is composed of a series of black shapes representing each unknown letter of the secret word. As the player correctly guesses each letter, any occurrence of this letter is revealed. Any bad guesses are listed on-screen with a strikethrough, and the current status of the game is communicated to the player via a styled text area.

# Project Structure/Design

React is component-based, which means that individual features of the app are each made up of small, independent constructs that work together in a hierarchy. A component is essentially a function that takes specific data (AKA “props”) as input, and returns a single piece of UI that can then be rendered. Components can be nested (i.e. made up of other components) and reused as desired.

My approach to creating this app was to start off with the smallest components necessary to facilitate the core gameplay experience, and then expand outward (this approach resulted in some noted issues, but ensured that I would have, at minimum, a working product). Most of the visual elements of the game are rendered by simple, so-called stateless functional components, that rely on data passed from larger parent components like \<Game>, that manage the logic and track the state of the game. As the player interacts with the app, this state is modified, and all relevant components are re-rendered accordingly.

Certain design elements were chosen to enhance the player experience - the empty black squares are intended to convey a greater sense of mystery, and thus a greater feeling of discovery when guessed correctly. The Status text, which changes often during gameplay, is intended to provide constant feedback to the player, almost simulating an opposing human player, while also providing necessary information (remaining guesses, etc). The font and background are reminiscent of playing the game with a pen and paper, giving additional credibility to the experience.
 
# Issues (read this!)

When attempting to request data from the API at http://app.linkedin-reach.io/words, I ran into a serious problem - apparently, the API server is not properly configured for CORS, and lacks an 'Access-Control-Allow-Origin' header. Due to the same-origin policy enforced by browsers, this means that any script running from a different origin (in this case, my app) is not permitted to access the API. I’ve written my application such that, if the API request fails, it will default to picking randomly out of 10 predefined words, so it’s still quite possible to play the game. However, the app will not make the specified request, and because the difficulty slider relies on the “difficulty=” request parameter, it will not have any effect.

For the sake of testing, a possible workaround is to use a Chrome extension, such as the one provided by [Moesif](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc), to bypass this issue - this is what I did in order to develop my app. However, the best solution of course, would be to properly implement the 'Access-Control-Allow-Origin' header on the server side, which unfortunately I do not have access to.

# Running the App

A live, playable version of this project is hosted at [https://build-exbulfhemf.now.sh](https://build-exbulfhemf.now.sh). Try it out!

Aside from that, listed below are a series of instructions that should get my project up and running on your local machine:

1. Download and install Node.js. If the option is given, make sure you select the option to install the NPM package manager. More details [here](https://build-exbulfhemf.now.sh).

2. Open a command line window, and navigate to the directory where this README is located.

3. Execute the following commands:
	- npm install
	- npm start

4. A browser window should open at localhost:3000 - otherwise, open a browser window and navigate there yourself.

Happy testing! Note that, without a workaround ([aforementioned browser extension](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)), the app will not be able to make requests to the Reach API.


# Closing Thoughts

Apologies if I wrote too much in this README, I figured it would be better to be thorough! It was a lot of work completing this challenge, but I had a great time doing it. Thank you so much for taking the time to review this project, let me know if you have any questions, and please enjoy the game!

