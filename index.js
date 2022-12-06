function copyElementToClipboard(element) {
    window.getSelection().removeAllRanges();
    let range = document.createRange();
    range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    swal("Good job!", "You have copied this template!", "success");
    }
/*
function copyHTML(){
    let signature = getElementById("sign").outerHTML;
    
    copyElementToClipboardUpdate(signature)
}*/




