function updateCaseNumber(product,price, isIncreasing){
    const productInput = document.getElementById(product +'-input');
    let productInputText = productInput.value;
    if (isIncreasing == true){
        productInputText= parseInt (productInputText) + 1;
    }
    else if(productInputText > 0){
        productInputText = parseInt (productInputText) - 1;
    }
    productInput.value = productInputText;
    const updateProductPrice = document.getElementById(product +'-price');
    updateProductPrice.innerText = productInputText * price;
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