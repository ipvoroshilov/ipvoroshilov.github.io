function userName(){
    let name = String(prompt("Введите Ваше имя"));
    if (name == ""){
        alert("Привет, Незнакомец");  
    }
    else {
        alert("Привет, "+name);
    }
}
