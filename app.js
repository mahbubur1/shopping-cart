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

    // update subtotal 
    calculateSubtotal()
} 
// get product input
function getInputValue(product){
    const productInput = document.getElementById(product +'-input');
    const productInputText = parseInt(productInput.value);
    return productInputText;
}
// calculate subtotal 
function calculateSubtotal(){
    const phoneNumber = getInputValue('phone')*1219;
    const caseNumber = getInputValue('case')*59;
    const subtotal = phoneNumber + caseNumber;
    const tex = subtotal / 10 ;
    const total = subtotal + tex ;
    document.getElementById('sub-total').innerText =subtotal;
    document.getElementById('tex-amount').innerText =tex;
    document.getElementById('total').innerText =total;

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