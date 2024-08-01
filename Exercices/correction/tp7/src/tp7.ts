import {JazzMusician, Musician, RockStar} from './Musician';

const musicians = [
  new JazzMusician('Ben', 'Vas', 29),
  new RockStar('Johnny', 'Hallyday', 74),
];

type MusicianData = Omit<Musician, 'addAlbum' | 'toString'>;
type OnlyFirstAndLastName = Pick<MusicianData, 'firstName' | 'lastName'>;

musicians
  .map(
    (musician): OnlyFirstAndLastName => ({
      firstName: musician.firstName,
      lastName: musician.lastName,
    })
  )
  .forEach((musician) => console.log(musician));
