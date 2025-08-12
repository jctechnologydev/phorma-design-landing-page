
const submitBtn = document.getElementById('submitBtn');

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';

  const payload = {
    name: document.getElementById('Name').value.trim(),
    email: document.getElementById('Email').value.trim(),
    message: document.getElementById('Message').value.trim()
  };

  console.log(payload);

  // client-side minimal validation
  if (payload.name.length < 3 || payload.email.length < 5) {
    alert('Preencha corretamente.');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar';
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (res.ok && data.ok) {
      document.getElementById('modal-success').style.display = 'block';
      form.reset();
    } else {
      console.error('server error', data);
      document.getElementById('modal-error').style.display = 'block';
    }
  } catch (err) {
    console.error('network error', err);
    document.getElementById('modal-error').style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar';
  }
});