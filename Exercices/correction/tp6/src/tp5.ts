import * as _ from 'lodash';
import display from './Display';
import {JazzMusician, RockStar} from './Musician';
import {log} from './Log';

log('Bienvenue dans ma première application TypeScript');

const musicians = [
  new JazzMusician('Ben', 'Vas', 29),
  new RockStar('Ad', 'Wat', 74),
];

display(musicians);

_.each(musicians, (m) => {
  if (m instanceof JazzMusician) {
    m.swing();
  } else {
    m.shout();
  }
});

const x = { [musicians[0].firstName]: musicians[0] };
_.each(x, (m) => {
  log(`Your favorite musician ${m}`);
  if (m instanceof JazzMusician) {
    m.swing();
  } else {
    m.shout();
  }
});
