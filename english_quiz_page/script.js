

function moveToQuizPage(selectedSubject){
    console.log(selectedSubject)

    if (selectedSubject == 'english1'){
        console.log(selectedSubject)
        location.href = 'english1.html'
    }
    else if (selectedSubject == 'english2'){
        console.log(selectedSubject)
        location.href = 'english2.html'
    }
}

function moveToMainPage(){
    location.href = "index.html"
}



function showResult(results){

    var correctCount = 0
    for (var i in results){

        if (i == "length"){
            break
        }

        results[i].readOnly = true
        if (i==0){

            if (results[i].value=="사과"){
                results[i].style.border = "2px solid #008000"
                correctCount++
                console.log("정답")
            }
            else{
                results[i].style.border = "2px solid #ff0000"
                console.log("오답")
            }
        }
        else if (i==1){

            if (results[i].value=="바나나"){
                correctCount++
                results[i].style.border = "2px solid #008000"
                console.log("정답")
            }
            else{
                results[i].style.border = "2px solid #ff0000"
                console.log("오답")
            }

        }
        else if (i==2){

            if (results[i].value=="병신"){
                correctCount++
                results[i].style.border = "2px solid #008000"
                console.log("정답")
            }
            else{
                results[i].style.border = "2px solid #ff0000"
                console.log("오답")
            }

        }
    }


    var answers = document.querySelectorAll('.answer')

    for (var i in answers){

        if (i == "length"){
            break
        }

        answers[i].style.display = "block"
        
    }

    document.querySelector(".otherButtons").style.display = "block"
    document.querySelector(".buttonDefault").style.display = "none"

    document.querySelector(".result").style.display = "block"
    document.querySelector(".result").innerHTML = `정답수 : ${correctCount}/3`;



    

}