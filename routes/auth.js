// ... (código existente)

const sendEmail = require('../utils/emailSender');

router.post('/register', async (req, res) => {
  // ... (código existente para registro)

  try {
    // ... (código existente)

    await user.save();

    // Enviar e-mail de boas-vindas
    await sendEmail(
      user.email,
      'Bem-vindo à nossa casa de estudantes!',
      `Olá ${user.name},\n\nBem-vindo à nossa casa de estudantes! Estamos felizes em tê-lo conosco. Seu quarto é o ${user.room}. Se precisar de qualquer ajuda, não hesite em nos contatar.\n\nAtenciosamente,\nA Administração`
    );

    // ... (resto do código existente)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// ... (resto do código existente)