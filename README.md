# Passport-Powell
Portfolio 1 Assessment


Quiz site for a simple capital cities in the uk targetted for people that want to test their knowledge.

![Responsive Image](https://github.com/passportpowell/project-2/blob/main/assets/images/readme.jpg?raw=true)



## User Stories
- Main page
As a visiting user I would like to see what the website is about and to have access to the quiz.


### Future Features
- Multiplayer
- Save top 10 Scores
- Category Selection


## Main Page

## Features
- Quiz in random order
- Reset Quiz
- Current Score update
- Score out of 50 points

### Game type
- Multiple choice quiz based on capital cities of countries in europe.

- Player clicks their choice and is informed of whter or not they are correct through interactive buttons and colors.

- Results after clicking an option are shown via colors, Green for correct and Red for incorrect.


![Responsive Image](https://github.com/passportpowell/project-2/blob/main/assets/images/right-answer.jpg?raw=true)

![Responsive Image](https://github.com/passportpowell/project-2/blob/main/assets/images/wrong-answer.jpg?raw=true)

- Score/points update in real time after each question answered correctly.

- Pop up appears after the game ends showing what score the player received out of 50.

![Responsive Image](https://github.com/passportpowell/project-2/blob/main/assets/images/score-popup.jpg?raw=true)

- Reset button underneath if the player would like to start again or player can refresh the page.

## Typography
- Font size used was Roboto-Slab
- Colors used 

- #000000

- #9eb1b3

- #4aa6e0

- #4f0f0f

- #c2830f

- #0000ff

- #c7dddf

- #00ffff

- #008000

- #ff0000


## Technologies Used
HTML5 - Used for creating layout.

CSS -  Used for styling HTML.

github - Used for hosting repository for easy sharing.

gitpod -  Used for writing the HTML, CSS, JS and README.

HOVER:CSS - Used for hover styling.

GOOGLE FONTS - for use of roboto-slab

FONT awesome - used for icons

## Running Tests

### Playing the Game
- Tested the game in different browsers
- tested correct answers increase score and showed as green
- tested incorrect answer didn't increase the score and showed as red.
- Checked text is readable

### CSS Validation
Validator used was https://jigsaw.w3.org/
<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>
       

### HTML Validation
Validator used was  https://validator.w3.org/

![Responsive Image](https://github.com/passportpowell/project-2/blob/main/assets/images/html-validator.jpg?raw=true)


### JavaScript Validation
Validator used was https://jshint.com/




### lighthouse validator
![Responsive Image](https://github.com/passportpowell/project-2/blob/main/assets/images/lighthouse.jpg?raw=true)



## Bugs Along The Way
- JS code for "choices" wasn't allowing me to check if answer was correct. Fixed by cahnging "choicea" to "choice1".

- The actual questions inside [questions] array was not showing up and changing but instead showed as "undefined". fixed by changing "class=question" to "id=question" in html.

- After selecting the correct answer in the quiz nothing would happen and the next question would not load. Fixed by checking the js code and found accidently commented out code.

- Questions changed before showing whether or not the chosen answer was correct via colors (Green or Red). fixed by finiding out how to set a time limit before moving onto next question.

- All answers are showing as incoorect. fixed by checking my code in my js code in the ternary attempt and had code compare to "acceptedA" instead of answer in the questions array.

- Trying to apply a class to the right and wrong answer respectivly wasn't working. fixed by changin "options" class into an options id.

- Trying to get score to incrememnt if answer was correct wasn't working and instead showed error of "[objectHTMLHeadingelement]10" where i wanted it to incrememnt the score by 5. the fix was  o assign previousScore first, add 5 to that score and assign the total.innerText to that new score

- Total questions are 10 but game over message appears after 9 questions. to fix i had to change the order so it ran first in the nextQuestion function

- Gameover message wont show amount of questions correct. Fixed by andding ".innerText" to total to make it total.innerText

- Reset button was only working if text was clicked rather than the area surrounding the text. fix was to change from being a "button" to just being and anchor link "a"

- When Right or wrong button is clicked they turn the correct color. When the wrong color is clicked it won't show what the correct answer is.

## Deployment
Deployment was achieved via GitHub and gitpod pages using the following steps

## Github
 - In the GitHub repository go to the Settings tab,

 - Using the source section drop-down menu, select the Master/ or Main Branch,

 - Once completed a link will be provided that may take a few minutes to go live,

- Live link https://github.com/passportpowell/project-2

## gitpod
 - In the terminal type python3 -m http.server
 a pop up appears which upon clicking "open in browserW will show a new tab with the site created.

## Credits
- Timeout js was sourced from "https://www.w3schools.com/jsref/met_win_setTimeout.asp" & "https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"
- Code for js was used from full stack developer course code.
- Code for fixing the issue with the game ending after 9 questions was sourced via slack community. 
- Code for fixing the issue with the end score giving a max of 45 points even if all questions were answered correctly was sourced via slack community. 
- Code for incrementing by a specific number (5) rather than by 1 was sourced via slack community.
