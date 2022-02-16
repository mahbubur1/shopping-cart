function updateCaseNumber(product,price, isIncreasing){
    const caseInput = document.getElementById(product +'-input');
    let caseInputText = caseInput.value;
    if (isIncreasing == true){
        caseInputText= parseInt (caseInputText) + 1;
    }
    else if(caseInputText > 0){
        caseInputText = parseInt (caseInputText) - 1;
    }
    caseInput.value = caseInputText;
    const updateCasePrice = document.getElementById(product +'-price');
    updateCasePrice.innerText = caseInputText * price;
}
// phone number plus 
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber("phone",1219,true);
})

// phone number minus
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber("phone",1219, false);
})


// case plus button event handler
document.getElementById('case-plus').addEventListener('click',function(){
   updateCaseNumber("case",59,true);
})

//case minus button event handler
document.getElementById('case-minus').addEventListener('click',function(){
   updateCaseNumber("case",59, false);
})