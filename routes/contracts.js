const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const auth = require('../middleware/auth');
const User = require('../models/User');

router.get('/generate', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    const doc = new PDFDocument();
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=contrato_${user.name}.pdf`);
    
    doc.pipe(res);
    
    doc.fontSize(18).text('Contrato de Arrendamento', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Nome do Aluno: ${user.name}`);
    doc.text(`Email: ${user.email}`);
    doc.text(`Quarto: ${user.room}`);
    doc.text(`Data de Início: ${new Date(user.dateJoined).toLocaleDateString()}`);
    
    // Adicione mais detalhes do contrato aqui
    
    doc.end();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;