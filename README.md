# project-2

1 player Multiple choice Game


## options

- geography capital cities*
- option to remove an answer up 1 times per quesion (max of 3 uses overall)
- scores 
- progress bar 


## bugs
javascript for choices wasn't allowing me to check if answer was correct. Had to change "choicea" to "choice1" for it to work.

Math function wasn't working correctly. corrected by using .length on 'let noOfQuestions []' as each time a question if presented the total number would decrease. helps in stopping the same question appearing.

Questions inside questions array was not showing up and chanchging but instead showed as "undefined". fixed by changing "class=question" to "id=question" in html.

After solecting correct answer nothing would happen and next question would not load. fixed by checking my comments to see i had commented out code instead of commenting next to it. fixed the error

questions moved on to fast before showing whether or not the chosen answer was correct via colors. fixed by finiding out how to set a time limit before moving onto next question

all answers are showing as incoorect. fixed by checking my syntax in my ternary attempt. i had it compare to "acceptedA" instead of answer in the questions array

trying to apply a class to the right and wrong answer respectivly wasn't working. fixed by changin "options" class into an options id.

trying to get score to incrememnt if answer was correct wasn't working and instead showed error of "[objectHTMLHeadingelement]10" where i wanted it to incrememnt the score by 10.