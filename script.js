const questions=[

{

question: "Which of the following keywords is used to define a variable in Javascript?",
answers:[
    {Text:"Let" ,correct:false},
    {Text:"Var ", correct:false},
    {Text:"Both A and B" ,correct:true},
    {Text:"None of the Above", correct:false},
]


},
{

question: "Javascript is an _______ language?",
answers:[
    {Text:"Object-Oriented" ,correct:true},
    {Text:"Object-Based", correct:false},
    {Text:"Procedural" ,correct:false},
    {Text:"None of the Above", correct:false},
]


},
{

question: "How can a datatype be declared to be a constant type?",
answers:[
    {Text:"Const" ,correct:true},
    {Text:"Let", correct:false},
    {Text:"Var" ,correct:false},
    {Text:"None of the Above", correct:false},
]


},
{

question: "What keyword is used to check whether a given property is valid or not?",
answers:[
    {Text:"In" ,correct:true},
    {Text:"exists", correct:false},
    {Text:"Is in" ,correct:false},
    {Text:"Lies", correct:false},
]


},
{

question: "What does the 'toLocateString()'method do in JS?",
answers:[
    {Text:"Return a localized object representation" ,correct:false},
    {Text:"Return a parse String", correct:false},
    {Text:"Return a localized string representation of an object" ,correct:true},
    {Text:"None of the Above", correct:false},
]


}

];
const questionElement=document.getElementById("Question");
const answerButton=document.getElementById("answer-button");
const NextButton=document.getElementById("next-btn");
let index=0;
let score=0;

function startQuiz() {
    index=0;
    score=0;
    NextButton.innerHTML="Next"
    ShowQuestion()

    
}

function ShowQuestion(){
    resetState();
let currentQuestion= questions[index];
let questionNo=index + 1;
questionElement.innerHTML=questionNo + "." + currentQuestion.question;


currentQuestion.answers.forEach(answer=>{
const button=document.createElement("button");
button.innerHTML=answer.Text;
button.classList.add("btn");
answerButton.appendChild(button);
if(answer.correct){
    button.dataset.correct =answer.correct;
}
button.addEventListener("click",selectAnswer);




});


}


function resetState(){

NextButton.style.display="none";
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}

 


}

function selectAnswer(e){

const selectbtn=e.target
const isCorrect=selectbtn.dataset.correct=== "true";
if(isCorrect){
    selectbtn.classList.add("correct");
    score++;
}
else{
    selectbtn.classList.add("Incorrect");
}
Array.from(answerButton.children).forEach(button=>{

    if(button.dataset.correct ==="true"){
        button.classList.add("correct");
}
         button.disabled="true"

});
NextButton.style.display="block"

}


function showScore(){

resetState();
questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
NextButton.innerHTML="Play Again!";
NextButton.style.display="block";


}

function HandleNextButton(){
index++;
if(index<questions.length){

ShowQuestion();

}
else{
showScore();


}



}
NextButton.addEventListener("click",()=>{

if(index<questions.length){

HandleNextButton();
}
else{
    startQuiz();

}



})

startQuiz() ;