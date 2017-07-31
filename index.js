import wiki from 'wikijs';
// const wiki = require('wikijs').default;

wiki().page('Batman')
    .then(page => page.info('alterEgo'))
    .then(console.log); // Bruce Wayne 
