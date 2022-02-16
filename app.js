// case plus button event handler
document.getElementById('case-plus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-input');
    const caseInputText = caseInput.value;
    caseInput.value = parseInt (caseInputText) + 1;
})

//case minus button event handler
document.getElementById('case-minus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-input');
    const caseInputText = caseInput.value;
    caseInput.value = parseInt (caseInputText) - 1;
})