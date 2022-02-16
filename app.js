function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-input');
    const caseInputText = caseInput.value;
    if (isIncreasing == true){
        caseInput.value = parseInt (caseInputText) + 1;
    }
    else if(caseInputText > 0){
        caseInput.value = parseInt (caseInputText) - 1;
    }
    

}


// case plus button event handler
document.getElementById('case-plus').addEventListener('click',function(){
   updateCaseNumber(true);
})

//case minus button event handler
document.getElementById('case-minus').addEventListener('click',function(){
   updateCaseNumber(false);
})