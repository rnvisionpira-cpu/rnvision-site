
function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

const form = document.getElementById('whatsappForm');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto =
      `Olá, gostaria de solicitar um orçamento para a RN Vision.%0A%0A` +
      `*Nome:* ${nome} ${sobrenome}%0A` +
      `*Celular:* ${celular}%0A` +
      `*Assunto:* ${assunto}%0A` +
      `*Mensagem:* ${mensagem}`;

    const url = `https://wa.me/5519999913539?text=${texto}`;
    window.open(url, '_blank');
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
