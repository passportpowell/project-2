# Passport-Powell
Portfolio 1 Assessment


Travel community site for meeting fellow travelers. Site is targeted mostly towards travelers coming into the UK while still being open to residents.

![Responsive Image](https://github.com/passportpowell/Passport-Powell/blob/main/readme-images/amiresponsive_old.jpg)## User Stories

- Main page
As a visiting user: I would like to see what the Website is about.

- Sign up Page
As a visiting user: I would like to signup for the newsletter.

- Weekly Schedule Page
As a visiting use: I would like to view the weekly schedule for meet ups. 

- Past events gallery page
As a visiting user: I would like to view the past event gallery. 
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Main Page
## Future Features## Future Features

- Multiplayer
- Save top 10 Scores
- Category Selection
## Typography

- Font size used was Roboto-Slab
- Colors used 
## Technologies Used

### Technologies used were as follows:


HTML5 - Used for creating layout.

CSS -  Used for styling HTML.

github - Used for hosting repository for easy sharing.

gitpod -  Used for writing the HTML and CSS and README.

HOVER:CSS - Used for hover styling.

GOOGLE FONTS - for use of roboto-slab

FONT awesome - used for icons
## Running Tests

### CSS Validation



### HTML Validation



### JavaScript Validation



### lighthouse validator




## Bugs Along The Way

javascript for choices wasn't allowing me to check if answer was correct. Had to change "choicea" to "choice1" for it to work.

Math function wasn't working correctly. corrected by using .length on 'let noOfQuestions []' as each time a question if presented the total number would decrease. helps in stopping the same question appearing.

Questions inside questions array was not showing up and chanchging but instead showed as "undefined". fixed by changing "class=question" to "id=question" in html.

After solecting correct answer nothing would happen and next question would not load. fixed by checking my comments to see i had commented out code instead of commenting next to it. fixed the error

questions moved on to fast before showing whether or not the chosen answer was correct via colors. fixed by finiding out how to set a time limit before moving onto next question

all answers are showing as incoorect. fixed by checking my syntax in my ternary attempt. i had it compare to "acceptedA" instead of answer in the questions array

trying to apply a class to the right and wrong answer respectivly wasn't working. fixed by changin "options" class into an options id.

trying to get score to incrememnt if answer was correct wasn't working and instead showed error of "[objectHTMLHeadingelement]10" where i wanted it to incrememnt the score by 5. the fix was  o assign previousScore first, add 5 to that score and assign the total.innerText to that new score

total questions are 10 but game over message appears after 9 questions. to fix i had to change the order so it ran first in the nextQuestion function

gameover message wont show amount of questions correct. Fixed by andding ".innerText" to total to make it total.innerText

Reset button was only working if text was clicked rather than the area surrounding the text. fix was to change from being a "button" to just being and anchor link "a"

When Right or wrong button is clicked they turn the correct color. When the wrong color is clicked it won't show what the correct answer is.

## Deployment

Deployment was achieved via GitHub and gitpod pages using the following steps

## Github
 - In the GitHub repository go to the Settings tab,

 - using the source section drop-down menu, select the Master/ or Main Branch,

 - Once completed a link will be provided that may take a few minutes to go live,

 - live link https://passportpowell.github.io/Passport-Powell/ .

## gitpod
 in the terminal type python3 -m http.server
 a pop up appears which upon clicking "open in browserW will show a new tab with the site created.
## Credits