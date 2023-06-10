import express from 'express';
const router = express.Router();

function fullURL(req) {
  return req.protocol + '://' + req.get('host') + req.originalUrl;
}

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Lou-Anne Lacaille, osteopathe à Beaune',
    desc_search:
      'Lou-Anne Lacaille, ostéopathe à Beaune, diplômée d‘ISOstéo, formée en périnatalité, 18 rue Jacques de Molay, 21200 Beaune, 03 80 24 74 47. Prise de rendez-vous en ligne.',
    desc_social:
      'Diplômée d‘ISOstéo, formée en périnatalité, 18 rue Jacques de Molay, 21200 Beaune, 03 80 24 74 47',
    social_image: 'images/share.png',
    fullURL: fullURL(req),
  });
});

router.get('/links', function (req, res) {
  res.render('links', {
    title: 'Retrouver Lou-Anne Lacaille aussi sur',
  });
});

export default router;
