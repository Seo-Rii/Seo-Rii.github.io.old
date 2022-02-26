import { publish } from 'gh-pages';

publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Seo-Rii/Seo-Rii.github.io.git',
    user: {
      name: 'Seohyun Lee',
      email: 'studioSeoRii@gmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);