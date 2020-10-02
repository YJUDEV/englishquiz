
  

function moveToQuizPage(selectedSubject){
    location.href = './in_quiz_pages/' + selectedSubject + ".html"
}

function moveToMainPage(){
  location.href = "../index.html"
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

  Array.prototype.shuffle = function () {
    var length = this.length;
    while (length) {
        var index = Math.floor((length--) * Math.random());

        var temp = this[length];
 
        this[length] = this[index];
 
        this[index] = temp;
    }
 
    return this;
};




const quizData = []
const quizDisplay = document.getElementById('quiz');
const resultDisplay = document.getElementById('result');
const submitBtn = document.getElementById('submit');
const retakeBtn = document.getElementById("retake")




function makeQuizData(selectedSubject){
    data = eval(selectedSubject)

    for (i=0; i<30; i++){

        //제대로된 질문과 응답값 추출
        correctData = data.random()
        question = correctData["mean"]
        correctAnswer = correctData["word"]
        data.splice(data.indexOf(correctData),1)


        //잘못된 응답값 1번 추출
        wrongAnswerChoice1 = data.random()
        worngAnswer1 = wrongAnswerChoice1["word"]
        data.splice(data.indexOf(wrongAnswerChoice1),1)


        //잘못된 응답값 2번 추출
        wrongAnswerChoice2 = data.random()
        worngAnswer2 = wrongAnswerChoice2["word"]
        data.splice(data.indexOf(wrongAnswerChoice2),1)


        answers = [correctAnswer,worngAnswer1,worngAnswer2]
        answers.shuffle()


        quizDataElement = {
            "question" : '웹개발에 주로 사용되는 프론트언어는?',
            "answers" : {
                "a" : "일본어",
                "b" : "다랑어",
                "c" : "자바스크립트"
            },
            "correct" : '"c"'
        }

        quizDataElement["question"] = question
        quizDataElement["answers"]["a"] = answers[0]
        quizDataElement["answers"]["b"] = answers[1]
        quizDataElement["answers"]["c"] = answers[2]


        if (answers[0] == correctAnswer){
            quizDataElement["correct"] = "a"
        }

        else if (answers[1] == correctAnswer){
            quizDataElement["correct"] = "b"
        }

        else{
            quizDataElement["correct"] = "c"
        }

        quizData.push(quizDataElement)


        data.push(wrongAnswerChoice2)
        data.push(wrongAnswerChoice1)
    }
}




function buildQuiz(selectedSubject){

    makeQuizData(selectedSubject)

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


//Models

const lesson5 = [
    {
        "word" : "stand for",
        "mean" : "~을 나타내다"
    },

    {
        "word" : "artificial satellite",
        "mean" : "인공위성"
    },

    {
        "word" : "maximize",
        "mean" : "극대화하다"
    },

    {
        "word" : "minimize",
        "mean" : "최소화하다"
    },

    {
        "word" : "innovation",
        "mean" : "혁신"
    },

    {
        "word" : "share",
        "mean" : "나누다"
    },

    {
        "word" : "nowadays",
        "mean" : "요즘"
    },

    {
        "word" : "innovative change",
        "mean" : "혁신적인 변화"
    },

    {
        "word" : "component",
        "mean" : "구성요소"
    },

    {
        "word" : "national boundary",
        "mean" : "국경"
    },
    
    {
        "word" : "advance",
        "mean" : "전진하다"
    },
    
    {
        "word" : "orginate from",
        "mean" : "~에서 비롯되다"
    },
    
    {
        "word" : "calculate",
        "mean" : "계산하다"
    },
    
    {
        "word" : "orbit",
        "mean" : "궤도(를 돌다)"
    },
    
    {
        "word" : "launch",
        "mean" : "발사하다"
    },
    
    {
        "word" : "beam",
        "mean" : "전파를 보내다"
    },
    
    {
        "word" : "continuous",
        "mean" : "계속되는"
    },
    
    {
        "word" : "atomospheric",
        "mean" : "대기권의"
    },
    
    {
        "word" : "benefit from",
        "mean" : "~에서서 혜택을 입다"
    },
    
    {
        "word" : "detect",
        "mean" : "감지하다"
    },
    
    {
        "word" : "herbicide",
        "mean" : "제초제"
    },
    
    {
        "word" : "environmental pollution",
        "mean" : "환경오염"
    },
    
    {
        "word" : "suitable",
        "mean" : "적합한"
    },
    
    {
        "word" : "fertilizer",
        "mean" : "비료"
    },
    
    {
        "word" : "humidity",
        "mean" : "습도"
    },
    
    {
        "word" : "agriculture",
        "mean" : "농업"
    },
    
    {
        "word" : "temperature",
        "mean" : "온도, 기온"
    },
    
    {
        "word" : "remotely",
        "mean" : "원격으로"
    },
    
    {
        "word" : "exception",
        "mean" : "예외"
    },
    
    {
        "word" : "revolutionize",
        "mean" : "혁신을 일으키다"
    },
    
    {
        "word" : "unmanned",
        "mean" : "무인의"
    },
    
    {
        "word" : "aerial vehicle",
        "mean" : "항공기"
    },
    
    {
        "word" : "autopilot",
        "mean" : "자동 조종장치"
    },
    
    {
        "word" : "take off",
        "mean" : "이륙하다"
    },
    
    {
        "word" : "be equipped with",
        "mean" : "~을 갖추다"
    },
    
    {
        "word" : "moistrue",
        "mean" : "수분"
    },
    
    {
        "word" : "infrared",
        "mean" : "적외선의"
    },
    
    {
        "word" : "give off",
        "mean" : "발산하다"
    },
    
    {
        "word" : "crop",
        "mean" : "농작물"
    },
    
    {
        "word" : "quanlity",
        "mean" : "질"
    },
    
    {
        "word" : "quantity",
        "mean" : "수량"
    },
    
    {
        "word" : "an army of",
        "mean" : "한 무리의 집단"
    },
    
    {
        "word" : "replace",
        "mean" : "교체하다, 대신하다"
    },
    
    {
        "word" : "a wide range of",
        "mean" : "광범위한"
    },
    
    {
        "word" : "tend",
        "mean" : "~을 돌보다"
    },
    
    {
        "word" : "specialize",
        "mean" : "전문적으로 다루다"
    },
    
    {
        "word" : "precisely",
        "mean" : "정확하게"
    },
    
    {
        "word" : "shortage",
        "mean" : "부족"
    },
    
    {
        "word" : "accuracy",
        "mean" : "정확"
    },
    
    {
        "word" : "out of question",
        "mean" : "확실히"
    },
    
    {
        "word" : "out of the question",
        "mean" : "불가능한"
    },
    
    {
        "word" : "function",
        "mean" : "기능"
    },
    
    {
        "word" : "large-scale",
        "mean" : "대규모의"
    },
    
    {
        "word" : "optimize",
        "mean" : "최적화하다"
    },
    
    {
        "word" : "erosion",
        "mean" : "침식"
    },
    
    {
        "word" : "ensure",
        "mean" : "보장하다"
    },
    
    {
        "word" : "go off track",
        "mean" : "길에서 벗어나다"
    },
    
    {
        "word" : "visibility",
        "mean" : "가시성"
    },
    
    {
        "word" : "monitor",
        "mean" : "관찰하다"
    },
    
    {
        "word" : "livestock",
        "mean" : "가축"
    },
    
    {
        "word" : "sensor",
        "mean" : "감지기"
    },
    
    {
        "word" : "attach",
        "mean" : "붙이다"
    },
    
    {
        "word" : "detect",
        "mean" : "알아내다"
    },
    
    {
        "word" : "pregnant",
        "mean" : "임신한"
    },
    
    {
        "word" : "vet",
        "mean" : "수의사"
    },
    
    {
        "word" : "deal with",
        "mean" : "처리하다"
    },
    
    {
        "word" : "entire",
        "mean" : "전체의"
    },
    
    {
        "word" : "efficient",
        "mean" : "효율적인"
    },
    
    {
        "word" : "profitable",
        "mean" : "수익성이 있는"
    },
    
    {
        "word" : "address",
        "mean" : "~를 해결하다"
    },
    
    {
        "word" : "impact",
        "mean" : "영향, 충격"
    },
    
    {
        "word" : "equipment",
        "mean" : "장비"
    },
    
    {
        "word" : "construct",
        "mean" : "~를 건설하다"
    },
    
    {
        "word" : "convenient",
        "mean" : "편리한"
    },
    
    {
        "word" : "access to",
        "mean" : "~에 접근하다"
    },
    
    {
        "word" : "nutrient",
        "mean" : "영양소"
    },
    
    {
        "word" : "incorrect",
        "mean" : "부정확한"
    },
    
    {
        "word" : "recipient",
        "mean" : "수신인"
    },
    
    {
        "word" : "transmit",
        "mean" : "전송하다"
    },
    
    {
        "word" : "automatically",
        "mean" : "자동적으로"
    },
    
    {
        "word" : "back up",
        "mean" : "백업하다"
    },
    
    {
        "word" : "side effect",
        "mean" : "부작용"
    },
    
    {
        "word" : "definite",
        "mean" : "확실한"
    },
    
    {
        "word" : "impact",
        "mean" : "영향, 충격"
    }
]