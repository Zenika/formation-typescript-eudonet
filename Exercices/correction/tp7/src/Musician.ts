import { logged } from "./Log";
import _ from "lodash";

export enum Music {
    JAZZ,
    ROCK,
}

export class Album {
    constructor(public title: string) {}

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

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ) {}

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
        if (_.isUndefined(this.style)) {
            return `${this.firstName} ${this.lastName} plays`;
        } else {
            return `${this.firstName} ${this.lastName} plays ${
                Music[this.style]
            }`;
        }
    }

    public addAlbum(album: Album): void {
        this._albums.push(album);
    }
}

@StyleMusic(Music.JAZZ)
export class JazzMusician extends Musician {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ) {
        super(firstName, lastName, age);
    }

    @logged
    public swing(): string {
        return "I’m swinging!";
    }
}

@StyleMusic(Music.ROCK)
export class RockStar extends Musician {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ) {
        super(firstName, lastName, age);
    }

    @logged
    public shout(): string {
        return "I'm shouting!";
    }
}

function StyleMusic(style: Music) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <T extends new (...args: any[]) => Musician>(constructor: T): T => {
        return class extends constructor {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            constructor(...args: any[]) {
                super(...args);
                this.style = style;
            }
        };
    };
}
