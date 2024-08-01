import display from './Display';
import {Album, JazzMusician, Musician, RockStar} from './Musician';
import { log } from './Log';
import * as _ from 'lodash';

const miles = new JazzMusician('Miles', 'Davis', 89);
miles.addAlbum(new Album('Kind Of Blue'));
miles.addAlbum(new Album('Tutu'));

const musicians: Musician[] = [
    miles,
    new RockStar('Mick', 'Jagger', 72),
];

log('Bienvenue dans ma première applications TypeScript');
display(musicians);
display(miles.albums);

_.each(musicians, function (musician) {
    if (musician instanceof JazzMusician) {
        musician.swing();
    } else if (musician instanceof RockStar) {
        musician.shout();
    }
});
