
//select document body
const body = document.querySelector("body");

//select <div> element containing the application
const docDiv = document.querySelector(".doc-div");

//select <div> element containing "introduction" section
const introPageDiv = document.querySelector(".intro-page-div");

//select <div> element containing "quiz" section
const quizDiv = document.querySelector(".quiz-div");

//select <div> element for "score" section
const quizScoreFormDiv = document.querySelector(".quiz-score-form-div");

//select <div> element for "solution" section
const solutionPageDiv = document.querySelector(".solution-page-div");

//select <form> element used for selection of number of questions
const quesNumberSelectionForm = document.querySelector(".ques-number-selection-form");

//select <input> element for selection of number of questions
const quesNumberSelectionInput = document.querySelector(".ques-number-selection-input");

//select <div> element that contains the score para
const quizScoreDiv = document.querySelector(".quiz-score-div");

//select <span> element for displaying calculated score
const quizScoreSpan = document.querySelector(".quiz-score-span");

//select <span> element for displaying maximum points
const quizMaxPointSpan = document.querySelector(".quiz-max-point-span");

//select <form> element that contains the 'answers' and 'refresh' buttons
const refreshForm = document.querySelector(".refresh-form");

//select <button> element used to view correct solution
const answersBtn = document.querySelector(".answers-btn");


//declare array that contains <form> elements for quiz questions and choices
const quizForms = [];
//declare array that contains <div> elements for questions and choices
const quesChoiceDivs = [];
//declare array that contains <div> elements for quiz questions
const quesNumTextDivs = [];
//declare array that contains <span> elements to display question numbers
const quesNumSpans = [];
//declare array that contains <div> elements to display question texts
const quesDivs = [];
//declare array that contains <div> elements for question choices
const allChoiceDivs = [];
//declare array that contains <div> elements for individual choices
const choiceDivs = [];
//declare array that contains <input> elements of "radio" type for choices
const choiceRadioInputs = []; 
//declare array that contains <label> elements for "radio inputs"
const choiceLabels = [];
//declare array that contains <div> elements for displaying "Next" buttons 
const nextBtnDivs = [];
//declare array that contains <button> elements for "Next" buttons
const nextBtns = [];

//declare variable for <div> element for displaying "Submit" button
let submitBtnDiv;
//declare variable for <button> element for "Submit" button
let submitBtn;
//declare array to store user answers
let userAnswers = [];

//make "introduction" section visible
introPageDiv.classList.add("intro-page-visible-div");

//make "quiz" section invisible
quizDiv.classList.add("quiz-invisible-div");

//make "score" section invisible
quizScoreFormDiv.classList.add("quiz-score-form-invisible-div");

//make "solution" section invisible
solutionPageDiv.classList.add("solution-page-invisible-div");

//declare array of objects that contains quiz questions, answer choices and correct answers
const questionBank = [
    {
        quesNo: 1,
        ques: "River Nile has its source in which African country?",
        choices: [
            "Egypt",
            "Sudan",
            "Ethiopia",
            "Chad"
        ],
        correctAns: "Ethiopia"
    },
    {
        quesNo: 2,
        ques: "Which country has the highest number of natural lakes in the world?",
        choices: [
            "Finland",
            "United States",
            "Russia",
            "Canada"
        ],
        correctAns: "Canada"
    },
    {
        quesNo: 3,
        ques: "Grand Canyon is located in which US state?",
        choices: [
            "California",
            "Arizona",
            "Nevada",
            "Colorado"
        ], 
        correctAns: "Arizona"
    },
    {
        quesNo: 4,
        ques: "Mt. Fuji is located in which country?",
        choices: [
            "Japan",
            "China",
            "Vietnam",
            "Thailand"
        ], 
        correctAns: "Japan"
    },
    {
        quesNo: 5,
        ques: "What is the capital of Peru?",
        choices: [
            "Riga",
            "Lima",
            "La Paz",
            "Santiago"
        ],
        correctAns: "Lima"              
    },
    {
        quesNo: 6,
        ques: "Gulf Stream is located in which ocean?",
        choices: [
            "Pacific Ocean",
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean"
        ], 
        correctAns: "Atlantic Ocean"
    },
    {
        quesNo: 7,
        ques: "Which is the largest state in India by area?",
        choices: [
            "Madhya Pradesh",
            "Uttar Pradesh",
            "Rajasthan",
            "Tamil Nadu"
        ], 
        correctAns: "Rajasthan"
    },
    {
        quesNo: 8,
        ques: "Which is the smallest country in the world?",
        choices: [
            "Monaco",
            "Liechtenstein",
            "Luxembourg",
            "Vatican City"
        ], 
        correctAns: "Vatican City"
    },
    {
        quesNo: 9,
        ques: "What is the capital of Romania?",
        choices: [
            "Budapest",
            "Bucharest",
            "Sofia",
            "Tirana"
        ],
        correctAns: "Bucharest"
    },
    {
        quesNo: 10,
        ques: "Which is the oldest mountain range in India?",
        choices: [
            "The Aravallis",
            "The Himalayas",
            "The Vindhyas",
            "The Western Ghats"
        ],
        correctAns: "The Aravallis"
    },
    {
        quesNo: 11,
        ques: "Which river is the longest river in Asia?",
        choices: [
            "Brahmaputra",
            "Yangtze",
            "Yellow River",
            "Ganges"
        ],
        correctAns: "Yangtze"
    },
    {
        quesNo: 12,
        ques: "What is the capital of Australia?",
        choices: [
            "Melbourne",
            "Sydney",
            "Canberra",
            "Adelaide"
        ],
        correctAns: "Canberra"      
    },
    {
        quesNo: 13,
        ques: "Which mountain range is the longest in the world?",
        choices: [
            "The Himalayas",
            "The Alps",
            "The Andes",
            "The Rockies"
        ],
        correctAns: "The Andes"
    },
    {
        quesNo: 14,
        ques: "Which is the largest peninsula in the world?",
        choices: [
            "The Arabian Peninsula",
            "The Indian Peninsula",
            "The Yucatan Peninsula",
            "The Iberian Peninsula"
        ],
        correctAns: "The Arabian Peninsula"
    },
    {
        quesNo: 15,
        ques: "Which country is known as the Land of the Midnight Sun?",
        choices: [
            "Norway",
            "Finland",
            "Sweden",
            "Denmark"
        ],
        correctAns: "Norway"
    },
    {
        quesNo: 16,
        ques: "International Date Line is situated in which longitude?",
        choices: [
            "0 degree",
            "90 degrees East",
            "90 degrees West",
            "180 degrees"
        ],
        correctAns: "180 degrees"
    },
    {
        quesNo: 17,
        ques: "Which country is home to the most volcanoes?",
        choices: [
            "Philippines",
            "Japan",
            "Indonesia",
            "Malaysia"
        ],
        correctAns: "Indonesia"
    },
    {
        quesNo: 18,
        ques: "Which European capital city is built on 14 islands?",
        choices: [
            "Oslo, Norway",
            "Stockholm, Sweden",
            "Amsterdam, The Netherlands",
            "Copenhagen, Denmark"
        ], 
        correctAns: "Stockholm, Sweden"
    },
    {
        quesNo: 19,
        ques: "Which African country has the largest population?",
        choices: [
            "South Africa",
            "Egypt",
            "Nigeria",
            "Algeria"
        ],
        correctAns: "Nigeria"
    },
    {
        quesNo: 20,
        ques: "What is the capital of Vietnam?",
        choices: [
            "Hanoi",
            "Vientiane",
            "Phnom Penh",
            "Naypyidaw"
        ],
        correctAns: "Hanoi"
    }
]
 

//function to create elements for the quiz; takes number of questions selected by user as an argument
function createQuizSpace(numberOfQues){

    //loop for creating quiz elements
    for(let i=0; i<numberOfQues; i++){

        //create <form> element and store it in 'quizForms[]' array
        quizForms[i] = document.createElement("form");
        //make it a child element of 'quizDiv' <div> element
        quizDiv.appendChild(quizForms[i]);
        //add class for css styling; make it invisible
        quizForms[i].classList.add("quiz-form", "quiz-form-invisible")


        //create <div> element and store it in 'quizchoiceDivs[]' array
        quesChoiceDivs[i] = document.createElement("div");
        //make it a child element of 'quizForms' <form> element
        quizForms[i].appendChild(quesChoiceDivs[i]);
        //add class for css styling; make it invisible
        quesChoiceDivs[i].classList.add("ques-choice-div", "ques-choice-invisible-div");


        //create <div> element and store it in 'quizNumTextDivs[]' array
        quesNumTextDivs[i] = document.createElement("div");
        //make it a child element of 'quizChoiceDivs' <div> element
        quesChoiceDivs[i].appendChild(quesNumTextDivs[i]);
        //add class for css styling
        quesNumTextDivs[i].classList.add("ques-num-text-div");


        //create <span> element and store it in 'quizNumSpans[]' array
        quesNumSpans[i] = document.createElement("span");
        //make it a child element of 'quizNumTextDivs' <div> element
        quesNumTextDivs[i].appendChild(quesNumSpans[i]);
        //add class for css styling
        quesNumSpans[i].classList.add("ques-num-span");


        //create <div> element and store it in 'quizDivs[]' array
        quesDivs[i] = document.createElement("div");
        //make it a second child of 'quizNumTextDivs' <div> element
        quesNumTextDivs[i].appendChild(quesDivs[i]);
        //add class for css styling
        quesDivs[i].classList.add("ques-div");


        //create <div> element and store it in 'allChoiceDivs[]' array
        allChoiceDivs[i] = document.createElement("div");
        //make it a second child of 'quizChoiceDivs' <div> element
        quesChoiceDivs[i].appendChild(allChoiceDivs[i]);
        //add class for css styling
        allChoiceDivs[i].classList.add("all-choice-div");

        //declare temporary array to store choices
        let choiceArray=[];

        //loop to create <div> elements for choices
        for(let j=0; j<questionBank[i].choices.length; j++){
            //create <div> element and store it in 'choiceArray[]' array
            choiceArray[j] = document.createElement("div");
        }

        //push the contents of 'choiceArray[]' into 'choiceDivs[]' 
        choiceDivs.push(choiceArray);

        //loop to append choice <div> elements to 'allChoiceDivs' 
        for(let j=0; j<questionBank[i].choices.length; j++){
            //make individual 'choiceDivs' elements as child element of 'allChoiceDivs[]' array
            allChoiceDivs[i].appendChild(choiceDivs[i][j]);
            //add class for css styling
            choiceDivs[i][j].classList.add("choice-div");
        }

        //declare arrays for temporarily storing "radio inputs" and their labels
        let radioArray = [];
        let labelArray = [];

        //loop to create radio inputs and labels
        for(let j=0; j<questionBank[i].choices.length; j++){
            //create <input> element and store it in 'radioArray[]' array
            radioArray[j] = document.createElement("input");
            //set 'type' attribute of <input> element as "radio"
            radioArray[j].type = "radio";
            //give it an 'id' attribute
            radioArray[j].id = `choice-${i}${j}`;
            //give it a 'name' attribute
            radioArray[j].name = `radio-${i}`;

            //create <label> element and store it in 'labelArray[]' array
            labelArray[j] = document.createElement("label");
            //give it a 'for' attribute which is same as the 'id' of the <input> element to link both elements
            labelArray[j].htmlFor = `choice-${i}${j}`;
        }

        //push the contents of 'radioArray[]' into 'choiceRadioInputs[]'
        choiceRadioInputs.push(radioArray);
        //set 'required' attribute to 'true' on one of the <input> elements from each set
        choiceRadioInputs[i][0].required = true;
        //push the contents of 'labelArray[]' into 'choiceLabels[]'
        choiceLabels.push(labelArray);

        //loop to append radio inputs and labels to 'choiceDivs'
        for(let j=0; j<questionBank[i].choices.length; j++){
            //make 'choiceRadioInputs' a child element of 'choiceDivs'
            choiceDivs[i][j].appendChild(choiceRadioInputs[i][j]);
            //make 'choiceLabels' a second child of 'choiceDivs'
            choiceDivs[i][j].appendChild(choiceLabels[i][j]);
            //add classes for css styling
            choiceRadioInputs[i][j].classList.add("choice-radio-input");
            choiceLabels[i][j].classList.add("choice-label");
        }

        //check if current question is not the last question
        if(i !== numberOfQues-1){
            //if above condition is true, create <div> element and store it in 'nextBtnDivs[]' array
            nextBtnDivs[i] = document.createElement("div");
            //make it last child of 'quizForms' <form> element
            quizForms[i].appendChild(nextBtnDivs[i]);
            //add class for css styling; make it invisible
            nextBtnDivs[i].classList.add("next-btn-div", "next-btn-invisible-div");

            //create <button> element and store it in 'nextBtns[]' array
            nextBtns[i] = document.createElement("button");
            //set 'type' attribute to 'submit'
            nextBtns[i].type = "submit";
            //add text to the button element
            nextBtns[i].textContent = "NEXT";
            //make it a child element of 'nextBtnDivs' element
            nextBtnDivs[i].appendChild(nextBtns[i]);
            //add class for css styling
            nextBtns[i].classList.add("next-btn");
        }

        //if current question is the last question
        else if(i===numberOfQues-1){
            //create <div> element and store it in 'submitBtnDiv' variable
            submitBtnDiv = document.createElement("div");
            //make it a child element of 'quizForms' element
            quizForms[i].appendChild(submitBtnDiv);
            //add class for css styling; make it invisible
            submitBtnDiv.classList.add("submit-btn-div", "submit-btn-invisible-div");
         
            //create <button> element and store it in 'submitBtn' variable
            submitBtn = document.createElement("button");
            //set 'type' attribute to 'submit'
            submitBtn.type = "submit";
            //add text to the <button> element
            submitBtn.textContent = "SUBMIT";
            //make it a child element of 'submitBtnDiv' element
            submitBtnDiv.appendChild(submitBtn);
            //add class for css styling
            submitBtn.classList.add("submit-btn");
        }
    }
}


//function to display questions and choices; takes question index and total number of questions selected by user as arguments
function displayQuestion(questionIndex, numberOfQues){
    
    //check if current question is not the first question
    if(questionIndex>0){
        //make previous question and choices invisible
        quesChoiceDivs[questionIndex-1].classList.remove("ques-choice-visible-div");
        quesChoiceDivs[questionIndex-1].classList.add("ques-choice-invisible-div"); 

        //make previous question form invisible
        quizForms[questionIndex-1].classList.remove("quiz-form-visible");
        quizForms[questionIndex-1].classList.add("quiz-form-invisible");

        //make next button from the previous question invisible
        nextBtnDivs[questionIndex-1].classList.remove("next-btn-visible-div");
        nextBtnDivs[questionIndex-1].classList.add("next-btn-invisble-div");              
    }  

    //check if current question is not the last question
    if(questionIndex < numberOfQues-1){
        //make current 'Next' button visible
        nextBtnDivs[questionIndex].classList.remove("next-btn-invisible-div");
        nextBtnDivs[questionIndex].classList.add("next-btn-visible-div");
    }
    //if current question is the last question
    else{
        //make 'Submit' button visible
        submitBtnDiv.classList.remove("submit-btn-invisible-div");
        submitBtnDiv.classList.add("submit-btn-visible-div");           
    } 

    //make current 'quesChoiceDivs' <div> element visible
    quesChoiceDivs[questionIndex].classList.remove("ques-choice-invisible-div");
    quesChoiceDivs[questionIndex].classList.add("ques-choice-visible-div");
   
    //make current 'quizForms' <form> element visible
    quizForms[questionIndex].classList.remove("quiz-form-invisible");
    quizForms[questionIndex].classList.add("quiz-form-visible");

    //add question number to current 'quesNumSpans' <span> element
    quesNumSpans[questionIndex].textContent = questionIndex+1 + ".";
    //add question text to current 'quesDivs' <div> element
    quesDivs[questionIndex].textContent = questionBank[questionIndex].ques;

    //loop to add text to radio inputs and labels
    for(let i=0; i<questionBank[questionIndex].choices.length; i++){
        //set 'value' of current radio input as the current choice text
        choiceRadioInputs[questionIndex][i].value = questionBank[questionIndex].choices[i];
        //add text to <label> element as the current choice text
        choiceLabels[questionIndex][i].textContent = questionBank[questionIndex].choices[i];
    }
}                


//function to store user answers; takes question index as argument
function storeUserAnswer(index){

    //declare array to store radio input elements
    let radioBtns = [];
  
    //select all choices having the given index value and store them in 'radioBtns[]' array
    radioBtns = Array.from(document.getElementsByName(`radio-${index}`));
      
    //loop to store user answers
    for(let i=0; i<questionBank[index].choices.length; i++){
        //check if current radio button is 'checked'
        if(radioBtns[i].checked){
            //push the 'value' of 'checked' radio button to 'userAnswers[]' array
            userAnswers.push(radioBtns[i].value);
        }
    }
}


//function to validate user answer; takes number of questions selected by user as argument
function validateAnswer(numberOfQues){
     
    //initialize variable to store score
    let score = 0;

    //loop to validate user answers
    for(let i=0; i<numberOfQues; i++){
       //check if current user answer matches the corresponding correct answer stored in 'questionBank[]' array
       if(userAnswers[i] === questionBank[i].correctAns){
           //if user answer matches the correct answer, increment 'score' value by 1 
           score++;
       }
    }
    //return total score
    return score;
}


//function to display score; takes score and number of questions as arguments
function displayScore(score, numberOfQues){

    //make "quiz" section invisible 
    quizDiv.classList.remove("quiz-visible-div");
    quizDiv.classList.add("quiz-invisible-div");
   
    //make "score" section visible
    quizScoreFormDiv.classList.remove("quiz-score-form-invisible-div");
    quizScoreFormDiv.classList.add("quiz-score-form-visible-div");
   
    //check if user got full score
    if(score === numberOfQues){
        //create <p> element and store it in 'congratTextPara' variable
        congratTextPara = document.createElement("p");
        //add class for css styling
        congratTextPara.classList.add("congrat-text-para");
        //add text to 'congratTextPara' 
        congratTextPara.textContent = "Congratulations!!!";
        //make it the first child of 'quizScoreDiv'
        quizScoreDiv.prepend(congratTextPara);
    }

    //display score value on the <span> element
    quizScoreSpan.textContent = score;
    //display maximum points on the <span> element
    quizMaxPointSpan.textContent = numberOfQues;

    //listener function for 'answers' button
    answersBtn.onclick= ()=>{
        //make "score" section invisible
        quizScoreFormDiv.classList.remove("quiz-score-form-visible-div");
        quizScoreFormDiv.classList.add("quiz-score-form-invisible-div");

        //make "solution" section visible
        solutionPageDiv.classList.remove("solution-page-invisible-div");
        solutionPageDiv.classList.add("solution-page-visible-div");

        //call function 'displaySolution()' with number of questions as argument
        displaySolution(numberOfQues);
    }  
    //submit 'refreshForm' <form> element when 'refresh' button is clicked 
    refreshForm.onsubmit;
}


//function to display solution section; takes number of questions as argument
function displaySolution(numberOfQues){

    //declare array to store <div> elements for questions and answers
    const solutionPageQuesAnsDivs = [];
    //declare array to store <div> elements for questions
    const solutionPageQuesDivs = [];
    //declare array to store <div> elements for answers
    const solutionPageAnsDivs = [];
    //declare array to store <span> elements for question numbers
    const solutionPageQuesNumSpans = [];
    //declare array to store <div> elements for question texts
    const solutionPageQuesTextDivs = [];
    //declare array to store <p> elements for answers
    const solutionPageAnsParas = [];
   

    //loop to create solution section elements
    for(let i=0; i<numberOfQues; i++){

        //create <div> element and store it to 'solutionPageQuesAnsDivs[]' array
        solutionPageQuesAnsDivs[i] = document.createElement("div");
        //make it a child element of 'solutionPageDiv'
        solutionPageDiv.appendChild(solutionPageQuesAnsDivs[i]);
        //add class for css styling
        solutionPageQuesAnsDivs[i].classList.add("solution-page-ques-ans-div");

        //create <div> element and store it to 'solutionPageQuesDivs[]' array
        solutionPageQuesDivs[i] = document.createElement("div");
        //make it a child element of 'solutionPageQuesAnsDivs'
        solutionPageQuesAnsDivs[i].appendChild(solutionPageQuesDivs[i]);
        //add class for css styling
        solutionPageQuesDivs[i].classList.add("solution-page-ques-div");

        //create <span> element and store it to 'solutionPageQuesNumSpans[]' array
        solutionPageQuesNumSpans[i] = document.createElement("span");
        //make it a child element of 'solutionPageQuesDivs'
        solutionPageQuesDivs[i].appendChild(solutionPageQuesNumSpans[i]);
        //add class for css styling
        solutionPageQuesNumSpans[i].classList.add("solution-page-ques-num-span");

        //create <div> element and store it to 'solutionPageQuesTextDivs[]' array
        solutionPageQuesTextDivs[i] = document.createElement("div");
        //make it a second child element of 'solutionPageQuesDivs'
        solutionPageQuesDivs[i].appendChild(solutionPageQuesTextDivs[i]);
        //add class for css styling
        solutionPageQuesTextDivs[i].classList.add("solution-page-ques-text-div");

        //create <div> element and store it to 'solutionPageAnsDivs[]' array
        solutionPageAnsDivs[i] = document.createElement("div");
        //make it a second child element of 'solutionPageQuesAnsDivs'
        solutionPageQuesAnsDivs[i].appendChild(solutionPageAnsDivs[i]);
        //add class for css styling
        solutionPageAnsDivs[i].classList.add("solution-page-ans-div");

        //create <p> element and store it to 'solutionPageAnsParas[]' array
        solutionPageAnsParas[i] = document.createElement("p");
        //make it a child element of 'solutionPageAnsDivs'
        solutionPageAnsDivs[i].appendChild(solutionPageAnsParas[i]);
        //add class for css styling
        solutionPageAnsParas[i].classList.add("solution-page-ans-para");
    }    

    //create <form> element and store it in 'backBtnForm' variable
    const backBtnForm = document.createElement("form");
    //make it a second child element of 'solutionPageDiv'
    solutionPageDiv.appendChild(backBtnForm);
    //add class for css styling
    backBtnForm.classList.add("back-btn-form");

    //create <div> element and store it in 'backBtnDiv' variable
    const backBtnDiv = document.createElement("div");
    //make it a child element of 'backBtnForm' 
    backBtnForm.appendChild(backBtnDiv);
    //add class for css styling
    backBtnDiv.classList.add("back-btn-div");

    //create <button> element and store it in 'backBtn' variable
    const backBtn = document.createElement("button");
    //set 'type' attribute as 'submit'
    backBtn.type = "submit";
    //make it a child element of 'backBtnDiv'
    backBtnDiv.appendChild(backBtn);
    //add class for css styling
    backBtn.classList.add("back-btn");
    //add text to 'backBtn'
    backBtn.textContent = "BACK";


    //loop to display questions and answers
    for(let i=0; i<numberOfQues; i++){
        //add question number to <span> element
        solutionPageQuesNumSpans[i].textContent = i+1 + ".";
        //add question text to corresponding <div> element
        solutionPageQuesTextDivs[i].textContent = questionBank[i].ques;
        //add answer text to corresponding <p> element
        solutionPageAnsParas[i].textContent = "Ans. " + questionBank[i].correctAns;
    }

    //submit 'backBtnForm' <form> element when <button> element is clicked
    backBtnForm.onsubmit;
}   


//function to display subsequent questions during the quiz; takes question index and number of questions as arguments
function questionChange(index, numberOfQues){
       
    //call function 'displayQuestion()' and pass index value and number of questions as arguments; it will display the question and choices of the given index
    displayQuestion(index, numberOfQues);
       
    //check if the question is not the last question
    if(index<numberOfQues-1){
        //if it's not the last question, call the listener function when "Next" button is clicked
        quizForms[index].onsubmit = (e)=>{
            //prevent default action of submit event 
            e.preventDefault();
            //call 'storeUserAnswer()' with the index value to save user answer
            storeUserAnswer(index);
            //increment index by 1
            index++;
            //check if index is less than total number of questions
            if(index < numberOfQues){
                //call itself with updated index value
                questionChange(index, numberOfQues);
            }            
        }   
    }
    //if it is the last question
    else{
        //call the listener function when "submit" button is clicked
        quizForms[index].onsubmit = (e)=>{  
            //prevent default action of submit event
            e.preventDefault();
            //call 'storeUserAnswer()' with the index value to save user answer
            storeUserAnswer(index);
            //call 'validateAnswer()' with the number of questions and store the return value in 'score' variable
            const score = validateAnswer(numberOfQues);
            //reset all the quiz forms to initial state
            for(let i=0; i<quizForms.length; i++){
                quizForms[i].reset();
            }
     
            //call 'displayScore()' with the score value and number of questions to display the total score
            displayScore(score, numberOfQues);           
        }
    }
}


//listener function for 'start' button
quesNumberSelectionForm.onsubmit = (e)=>{

    //prevent default action of submit event
    e.preventDefault();

    //initialize 'index' variable
    let index = 0; 
    //take the number of questions selected by user and store it in a variable
    const numberOfQues = parseInt(quesNumberSelectionInput.value);
   
    //make "introduction" section invisible
    introPageDiv.classList.remove("intro-page-visible-div");
    introPageDiv.classList.add("intro-page-invisible-div");

    //make "quiz" section visible
    quizDiv.classList.remove("quiz-invisible-div");
    quizDiv.classList.add("quiz-visible-div");

    //call function 'createQuizSpace()' to create "quiz" section elements
    createQuizSpace(numberOfQues);

    //call function 'questionChange()' with the index value and number of questions to display questions and choices
    questionChange(index, numberOfQues);     
}   
      









































