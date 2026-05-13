const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit", (e)=>{

    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(email === "" || senha === ""){

      alert("Preencha todos os campos!");

      return;
    }

    alert("Login realizado com sucesso!");

    window.location.href = "dashboard.html";

  });

}

const toggleSenha = document.getElementById("toggleSenha");

if(toggleSenha){

  toggleSenha.addEventListener("click", ()=>{

    const senha = document.getElementById("senha");

    if(senha.type === "password"){

      senha.type = "text";

    }else{

      senha.type = "password";

    }

  });

}

function abrirEvento(){

  window.location.href = "evento.html";

}

function voltarDashboard(){

  window.location.href = "dashboard.html";

}

function abrirAdmin(){

  window.location.href = "admin.html";

}

function inscreverEvento(){

  alert("Inscrição realizada com sucesso!");

}