//Clears Input on page refresh
var inputs = document.getElementsByTagName('input');
for(i = 0; i < inputs.length; i++){
    inputs[i].value = '';
}