function sendEmail() {
  Email.send({
    secureToken: "96b35e13-609f-4629-bb8c-d825a04e1d3b",
    To: "filipebeneditocontato@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Novo contato",
    Body:
      "Nome: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Telefone: " +
      document.getElementById("phone").value +
      "<br> Mensagem: " +
      document.getElementById("message").value,
  }).then((message) => alert("Menssagem enviada com sucesso!"));
}
