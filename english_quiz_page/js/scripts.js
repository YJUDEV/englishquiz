
  

function moveToQuizPage(selectedSubject){
    location.href = './in_quiz_pages/' + selectedSubject + ".html"
}

function moveToMainPage(){
  location.href = "../index.html"
}


var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


const quizData = []
const quizDisplay = document.getElementById('quiz');
const resultDisplay = document.getElementById('result');
const submitBtn = document.getElementById('submit');
const retakeBtn = document.getElementById("retake")

function buildQuiz(selectedSubject){

    var client = new HttpClient();
    client.get('http://121.158.166.119:5000/' + selectedSubject, function(response) {
        response = JSON.parse(response)
        for (i=0; i<response.length; i++){
            quizData.push(response[i])
        }

        const output = [ ]; 
        quizData.forEach(  
            (currentQuestion, questionNum) => { 
                const answers = [ ];  
                for(item in currentQuestion.answers){ 
                    answers.push(`<label style="margin-right:3%;">
                                <input type="radio"  name="question${questionNum}" value="${item}">
                                    ${currentQuestion.answers[item]}
                                </label>`);
                }
                output.push(`<div class="question" style="text-align: center;font-weight:bold; font-size: 2rem;"> ${(questionNum+1+'. ') + currentQuestion.question}</div>
                            <div class="answer" style="text-align: center; font-size: 1.5rem;">${answers.join('')}</div>`);
            }              
        );
    
        quizDisplay.innerHTML = output.join('</br></br></br>');
    });
}


function showResult(){
    const answerDisplays = quizDisplay.querySelectorAll('.answer');  
      let numCorrect = 0; 

       quizData.forEach( (currentQuestion, questionNum)=>{
              const answerDisplay = answerDisplays[questionNum]; 
              const selector = `input[name=question${questionNum}]:checked`;  
              const userAnswer = (answerDisplay.querySelector(selector) || {}).value;  


               if(userAnswer === currentQuestion.correct){    
                       numCorrect++;
                       answerDisplays[questionNum].style.color = 'green';
               }else{
                       answerDisplays[questionNum].style.color = 'red';
               }
       });
        resultDisplay.innerHTML = `<div style="text-align: center; font-size: 1.5rem;"> 정답수 : ${numCorrect} / ${quizData.length}<div>`; 
        retakeBtn.style.display="inline";
        retakeBtn.style.marginLeft="2%"
}