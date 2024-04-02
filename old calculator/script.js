function Calculate(){
var value1 = document.getElementById('first').value;
var value2 = document.getElementById('second').value;
var operation = document.getElementById('ope').value;

if (operation == '+'){
    var res = parseInt(value1) + parseInt(value2);
}if (operation == '-'){
    var res = parseInt(value1) - parseInt(value2);
}if (operation == '*'){
    var res = parseInt(value1) * parseInt(value2);
}if (operation == '/'){
    var res = parseInt(value1) / parseInt(value2);
}
document.getElementById('res').value = res;

}



