// case plus button event handler
document.getElementById('case-plus').addEventListener('click',function(){
    const caseNumber = document.getElementById('case-number');
    const caseNumberText = caseNumber.value;
    caseNumber.value = parseInt (caseNumberText) + 1;
})

//case minus button event handler
