function userName(){
    let name = String(prompt("Введите Ваше имя"));
    if (name != ""){
        alert("Привет, "+name)
    }
    else {
        alert("Привет, Незнакомец");
    }
}
