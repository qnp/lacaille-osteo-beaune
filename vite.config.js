import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

const options = {};
const locals = {
  title: 'Lou-Anne Lacaille, osteopathe à Beaune',
  desc_search:
    'Lou-Anne Lacaille, ostéopathe à Beaune, diplômée d‘ISOstéo, formée en périnatalité, 18 rue Jacques de Molay, 21200 Beaune, 03 80 24 74 47. Prise de rendez-vous en ligne.',
  desc_social:
    'Diplômée d‘ISOstéo, formée en périnatalité, 18 rue Jacques de Molay, 21200 Beaune, 03 80 24 74 47',
  social_image: 'images/share.png',
  fullURL: 'https://www.lacaille-osteo-beaune.fr',
};

export default defineConfig({
  server: { port: 8080 },
  plugins: [pugPlugin(options, locals)],
});
