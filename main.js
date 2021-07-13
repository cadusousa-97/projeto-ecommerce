function cadastraEmail(){
    var emailCadastro = document.getElementById("email");

    var emails = JSON.parse(localStorage.getItem("emailsblackfriday"));

    if(emails == null){
        localStorage.setItem("emailsblackfriday", "[]");
        emails = [];
    }

    var auxRegistro = {
        email: emailCadastro.value,
    }

    emails.push(auxRegistro);

    localStorage.setItem("emailsblackfriday", JSON.stringify(emails));
    alert("Email inscrito com sucesso!")
    emailCadastro.value = "";
}
