import { log } from './Log';

export enum Music { JAZZ, ROCK }

export class Album {
    constructor(public title: string) {
    }

    public toString(): string {
        return this.title;
    }
}

export interface IMusician {
    addAlbum: (album: Album) => void;
}

export class Musician implements IMusician {
    private _style: Music | undefined;
    private _albums: Album[] = [];

    constructor(public firstName: string, public lastName: string, public age: number) {
    }

    get style(): Music | undefined {
        return this._style;
    }

    set style(value: Music | undefined) {
        this._style = value;
    }

    get albums(): Album[] {
        return this._albums;
    }

    set albums(value: Album[]) {
        this._albums = value;
    }

    public toString(): string {
        if (this.style === undefined) {
            return `${this.firstName} ${this.lastName} plays`;
        } else {
            return `${this.firstName} ${this.lastName} plays ${Music[this.style]}`;
        }
    }

    public addAlbum(album: Album): void {
        this._albums.push(album);
    }
}

export class JazzMusician extends Musician {
    constructor(public firstName: string, public lastName: string, public age: number) {
        super(firstName, lastName, age);
        this.style = Music.JAZZ;
    }

    public swing(): void {
        log('I’m swinging!');
    }
}

export class RockStar extends Musician {
    constructor(public firstName: string, public lastName: string, public age: number) {
        super(firstName, lastName, age);
        this.style = Music.ROCK;
    }

    public shout(): void {
        log('I’m shouting!');
    }
}

// Attention la modélisation des classes n'est pas sans faille
// Mettre le getter et setter a protected protège d'une mauvaise modification de la propriété style
// TS2445: Property 'style' is protected and only accessible within class 'Musician' and its subclasses.
// const a = new JazzMusician('Benoit', 'Vasseur', 28);
// a.style = Music.ROCK;
// a.style = undefined;
// TS2540: Cannot assign to 'style' because it is a read-only property.


