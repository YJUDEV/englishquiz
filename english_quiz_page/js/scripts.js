
  

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
        "word" : "quality",
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
        "mean" : "알아내다, 감지하다"
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

const english_vocabulary_assessment = [

    //2과
    {
        "word" : "aerial",
        "mean" : "공중의"
    },

    {
        "word" : "alley",
        "mean" : "골목"
    },

    {
        "word" : "architecture",
        "mean" : "건축 양식"
    },

    {
        "word" : "be referred to as ~",
        "mean" : "~라고 불리다"
    },

    {
        "word" : "beverage",
        "mean" : "음료"
    },

    {
        "word" : "bloom",
        "mean" : "꽃이 피다"
    },

    {
        "word" : "cast over ~",
        "mean" : "~을 덮다, 감싸다"
    },

    {
        "word" : "circulate",
        "mean" : "순환하다"
    },

    {
        "word" : "combine",
        "mean" : "결합하다"
    },

    {
        "word" : "come across ~",
        "mean" : "~을 우연히 마주치다"
    },

    {
        "word" : "consist of ~",
        "mean" : "~로 이루어지다"
    },

    {
        "word" : "crooked",
        "mean" : "구부러진"
    },

    {
        "word" : "dawn",
        "mean" : "새벽"
    },

    {
        "word" : "dead end",
        "mean" : "막다른 길"
    },

    {
        "word" : "dye",
        "mean" : "염색하다"
    },

    {
        "word" : "enfold",
        "mean" : "안다, 감싸다"
    },

    {
        "word" : "entangle",
        "mean" : "얽어매다"
    },

    {
        "word" : "entrance",
        "mean" : "입구"
    },

    {
        "word" : "exotic",
        "mean" : "이국적인"
    },

    {
        "word" : "hospitality",
        "mean" : "환대"
    },

    {
        "word" : "impolite",
        "mean" : "무례한"
    },

    {
        "word" : "infinite",
        "mean" : "무한한"
    },

    {
        "word" : "labyrinth",
        "mean" : "미로"
    },

    {
        "word" : "magnificent",
        "mean" : "경탄할 만한, 어마어마한"
    },

    {
        "word" : "marbel",
        "mean" : "경탄하다"
    },

    {
        "word" : "medieval",
        "mean" : "중세의"
    },

    {
        "word" : "perceive",
        "mean" : "여기다, 인지하다"
    },

    {
        "word" : "propser",
        "mean" : "번성하다"
    },

    {
        "word" : "refuse",
        "mean" : "거절하다"
    },

    {
        "word" : "reverse",
        "mean" : "뒷면의"
    },

    {
        "word" : "scenery",
        "mean" : "경치, 풍경"
    },

    {
        "word" : "scoop",
        "mean" : "(숟가락 등으로)뜨다, 파다"
    },

    {
        "word" : "sunset",
        "mean" : "석양, 일몰"
    },


    //3과
    {
        "word" : "a total of ~",
        "mean" : "총 금액이 ~인"
    },

    {
        "word" : "adopt",
        "mean" : "채택하다"
    },

    {
        "word" : "allocate",
        "mean" : "할당하다"
    },

    {
        "word" : "approximately",
        "mean" : "거의"
    },

    {
        "word" : "aspect",
        "mean" : "측면, 양상"
    },

    {
        "word" : "benefit",
        "mean" : "혜택, 이득"
    },

    {
        "word" : "burden",
        "mean" : "짐, 부담"
    },

    {
        "word" : "cashless",
        "mean" : "현금이 없는"
    },

    {
        "word" : "deny",
        "mean" : "부인하다"
    },

    {
        "word" : "dummy",
        "mean" : "모조의, 가짜의"
    },

    {
        "word" : "eliminate",
        "mean" : "제거하다, 없애다"
    },

    {
        "word" : "exclusion",
        "mean" : "제외, 배제"
    },

    {
        "word" : "finacial",
        "mean" : "금융의, 재정의"
    },

    {
        "word" : "hack",
        "mean" : "해킹하다"
    },

    {
        "word" : "instruction",
        "mean" : "설명, 지시"
    },

    {
        "word" : "internal",
        "mean" : "내부의"
    },

    {
        "word" : "penetrate",
        "mean" : "뚫고 들어가다"
    },

    {
        "word" : "point out ~",
        "mean" : "지적하다"
    },

    {
        "word" : "policy",
        "mean" : "정책"
    },

    {
        "word" : "prefer",
        "mean" : "선호하다"
    },

    {
        "word" : "pressure",
        "mean" : "압박감을 주다"
    },

    {
        "word" : "propose",
        "mean" : "제안하다"
    },

    {
        "word" : "regarding",
        "mean" : "~에 관하다"
    },

    {
        "word" : "replace",
        "mean" : "대신하다, 대체하다"
    },

    {
        "word" : "security",
        "mean" : "보안, 안전"
    },

    {
        "word" : "state",
        "mean" : "말하다"
    },

    {
        "word" : "the other day",
        "mean" : "얼마 전"
    },

    {
        "word" : "transfer",
        "mean" : "옮기다, 이동하다"
    },

    {
        "word" : "warn",
        "mean" : "경고하다"
    },

    {
        "word" : "welfate",
        "mean" : "복지, 후생"
    },
    

    //4과
    {
        "word" : "assign",
        "mean" : "맡기다"
    },

    {
        "word" : "attack",
        "mean" : "폭행하다, 공격하다"
    },

    {
        "word" : "commission",
        "mean" : "의뢰, 주문"
    },

    {
        "word" : "confusion",
        "mean" : "혼란"
    },

    {
        "word" : "delicate",
        "mean" : "섬세한, 정교한"
    },

    {
        "word" : "despair",
        "mean" : "절망"
    },

    {
        "word" : "destroy",
        "mean" : "파괴하다"
    },

    {
        "word" : "disapproval",
        "mean" : "반감, 못마땅함"
    },

    {
        "word" : "disbelief",
        "mean" : "믿기지 않음"
    },

    {
        "word" : "dismiss",
        "mean" : "물러가게 하다"
    },

    {
        "word" : "edge",
        "mean" : "가장자리"
    },

    {
        "word" : "emissary",
        "mean" : "사절, 특사"
    },

    {
        "word" : "flee",
        "mean" : "달아나다, 도망가다"
    },

    {
        "word" : "gasp",
        "mean" : "헉 하고 숨을 쉬다"
    },

    {
        "word" : "grab",
        "mean" : "헉 하고 숨을 쉬다"
    },

    {
        "word" : "grateful",
        "mean" : "감사하는"
    },

    {
        "word" : "hang one's head",
        "mean" : "고개를 떨구다"
    },

    {
        "word" : "hesitate",
        "mean" : "망설이다, 주저하다"
    },

    {
        "word" : "how dare ~",
        "mean" : "어떻게 감히 ~"
    },

    {
        "word" : "humble",
        "mean" : "미천한, 보잘것없는"
    },

    {
        "word" : "inlay",
        "mean" : "상감"
    },

    {
        "word" : "inspect",
        "mean" : "자세히 살펴보다"
    },

    {
        "word" : "mumble",
        "mean" : "중얼거리다"
    },

    {
        "word" : "rise to one's feet",
        "mean" : "일어서다"
    },

    {
        "word" : "robber",
        "mean" : "강도"
    },

    {
        "word" : "see to it that ~",
        "mean" : "반드시 ~ 하도록 (조처)하다"
    },

    {
        "word" : "skepticism",
        "mean" : "회의, 의심"
    },

    {
        "word" : "step back",
        "mean" : "뒤로 물러서다"
    },

    {
        "word" : "stupidity",
        "mean" : "어리석음"
    },

    {
        "word" : "swallow",
        "mean" : "삼키다"
    },


    //5과
    {
        "word" : "a wide range of ~",
        "mean" : "광범위한 ~"
    },

    {
        "word" : "accuracy",
        "mean" : "정확(도)"
    },

    {
        "word" : "address",
        "mean" : "처리하다, 해결하다"
    },

    {
        "word" : "an army of ~",
        "mean" : "~한 무리, 집단"
    },

    {
        "word" : "analyze",
        "mean" : "분석하다"
    },

    {
        "word" : "angle",
        "mean" : "각도"
    },

    {
        "word" : "autonomous",
        "mean" : "자율적인"
    },

    {
        "word" : "be equipped with ~",
        "mean" : "~을 갖추고 있다"
    },

    {
        "word" : "detect",
        "mean" : "알아내다, 감지하다"
    },

    {
        "word" : "ensure",
        "mean" : "반드시 ~ 하게 하다, 보장하다"
    },

    {
        "word" : "erosion",
        "mean" : "침식"
    },

    {
        "word" : "evolve",
        "mean" : "발전하다, 발달하다"
    },

    {
        "word" : "exception",
        "mean" : "예외"
    },

    {
        "word" : "fertilize",
        "mean" : "비료를 주다"
    },

    {
        "word" : "herbicide",
        "mean" : "제조제"
    },

    {
        "word" : "impact",
        "mean" : "영향, 충격"
    },

    {
        "word" : "infrared",
        "mean" : "적외선의"
    },

    {
        "word" : "it oges without saying that ~",
        "mean" : "~은 말할 것도 없다"
    },

    {
        "word" : "large-scale",
        "mean" : "대규모의"
    },

    {
        "word" : "moisture",
        "mean" : "수분"
    },

    {
        "word" : "observe",
        "mean" : "관찰하다"
    },

    {
        "word" : "potimize",
        "mean" : "최적화하다"
    },

    {
        "word" : "precisely",
        "mean" : "정확하게"
    },

    {
        "word" : "pregnant",
        "mean" : "임신한"
    },

    {
        "word" : "profitable",
        "mean" : "수익성이 있는, 이득이 되는"
    },

    {
        "word" : "remotely",
        "mean" : "멀리서, 원격으로"
    },

    {
        "word" : "revolutionize",
        "mean" : "혁신을 일으키다"
    },

    {
        "word" : "tend",
        "mean" : "돌보다, 보살피다"
    },

    {
        "word" : "unmanned",
        "mean" : "무인의"
    },

    {
        "word" : "vet",
        "mean" : "수의사"
    },

    {
        "word" : "visibility",
        "mean" : "가시성, 시계"
    },

    {
        "word" : "weed",
        "mean" : "잡초"
    },


    //6과
    {
        "word" : "acknowledge",
        "mean" : "인정하다"
    },

    {
        "word" : "apologise",
        "mean" : "사과하다"
    },

    {
        "word" : "as of ~",
        "mean" : "~ 일자로"
    },

    {
        "word" : "assault",
        "mean" : "폭행, 공격"
    },

    {
        "word" : "brutal",
        "mean" : "잔혹한, 악랄한"
    },

    {
        "word" : "cling",
        "mean" : "꼭 붙잡다, 매달리다"
    },

    {
        "word" : "craft",
        "mean" : "공들여 만들다"
    },

    {
        "word" : "denial",
        "mean" : "부인, 부정"
    },

    {
        "word" : "descendant",
        "mean" : "자손, 후손"
    },

    {
        "word" : "embrace",
        "mean" : "받아들이다"
    },

    {
        "word" : "grasp",
        "mean" : "꽉 잡다"
    },

    {
        "word" : "humanity",
        "mean" : "인간성, 인류애"
    },

    {
        "word" : "in the name of ~",
        "mean" : "~라는 명목으로"
    },

    {
        "word" : "indigenous",
        "mean" : "토착의"
    },

    {
        "word" : "inflict",
        "mean" : "(괴로움을) 가하다, (고통을) 주다"
    },

    {
        "word" : "instinct",
        "mean" : "본능, 천성"
    },

    {
        "word" : "lay claim to ~",
        "mean" : "~에 대한 권리를 주장하다"
    },

    {
        "word" : "mistreatment",
        "mean" : "학대, 혹사"
    },

    {
        "word" : "parliament",
        "mean" : "의회, 국회"
    },

    {
        "word" : "phenomenon",
        "mean" : "현상"
    },

    {
        "word" : "pile",
        "mean" : "쌓다, 포개다"
    },

    {
        "word" : "reflect on",
        "mean" : "반성하다"
    },

    {
        "word" : "removal",
        "mean" : "제거, 없애기"
    },

    {
        "word" : "respectfully",
        "mean" : "정중하게"
    },

    {
        "word" : "sociological",
        "mean" : "사회학의"
    },

    {
        "word" : "stubborn",
        "mean" : "완고한, 고집스러운"
    },

    {
        "word" : "suspend",
        "mean" : "중단하다"
    },

    {
        "word" : "the better part of ~",
        "mean" : "~의 대부분"
    },

    {
        "word" : "torturous",
        "mean" : "고통스러운"
    },

    {
        "word" : "whip",
        "mean" : "채찍"
    },
]