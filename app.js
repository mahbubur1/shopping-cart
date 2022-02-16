function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-input');
    let caseInputText = caseInput.value;
    if (isIncreasing == true){
        caseInputText= parseInt (caseInputText) + 1;
    }
    else if(caseInputText > 0){
        caseInputText = parseInt (caseInputText) - 1;
    }
    caseInput.value = caseInputText;
    const updateCasePrice = document.getElementById('update-case-price');
    updateCasePrice.innerText = caseInputText * 59;
}


// case plus button event handler
document.getElementById('case-plus').addEventListener('click',function(){
   updateCaseNumber(true);
})

//case minus button event handler
document.getElementById('case-minus').addEventListener('click',function(){
   updateCaseNumber(false);
})