const inputName = document.querySelector("#fname")
const inputAct = document.querySelector("#act")
const inputCost = document.querySelector("#cost")
const inputPercent = document.querySelector("#percent")
const btnCombine = document.getElementById("combine")
const mergeHold = document.getElementById("merg")
const theTip = document.getElementById("tip")

const newsURL ='https://newsapiraygorodskijv1.p.rapidapi.com/getArticles'
window.addEventListener('load', (event) => {
    document.querySelector("#fname").innerHTML = localStorage.getItem('name'); 
})
const tip = function (numcost, percent)
{
    console.log(numcost, percent)
    if(numcost < 0 || wage < 0){
    return 0;
    }
    else{
    return (numcost * percent);
    }
}

btnCombine.onclick = function(){
    const strcost = inputCost.value;
    const numcost = parseFloat(strcost);
    const strpercent = inputPercent.value;
    const numpercent = parseFloat(strpercent);
    const name = inputName.value;
    const act = inputAct.value;
    mergeHold.innerHTML = name + " you love to "+ act;
    localStorage.setItem('name', name)
    const tiptotal = tip(numcost, numpercent)
    if (tiptotal == 0){
        payHold.innerHTML = name + " recheck your inputs please.";
    }
    else {
        theTip.innerHTML = name + " your tip should be "+ tiptotal;
    }
}