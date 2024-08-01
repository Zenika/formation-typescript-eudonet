import { JazzMusician, Music, Musician, RockStar } from "./Musician";

export type MusicianData = Omit<Musician, 'addAlbum' | 'toString'>;

const dataInString = `[
    {
        "firstName": "Benoit",
        "lastName": "Vasseur",
        "age": 29,
        "style": "JAZZ"
    },
    {
        "firstName": "Johnny",
        "lastName": "Hallyday",
        "age": 74,
        "style": "ROCK"
    },
    {
        "firstName": "Rocky",
        "lastName": "Balboa",
        "age": 32,
        "style": "??"
    }
]`;

const data: unknown[] = JSON.parse(dataInString);

console.log(data);

function isObject(o: unknown): o is Record<string, unknown> {
    return Object.prototype.toString.call(o) === "[object Object]";
}

type ParsedMusician = Omit<MusicianData, "style"> & {
    style: keyof typeof Music;
};

function isValidMusicianData(o: unknown): o is ParsedMusician {
    if (!isObject(o)) {
        return false;
    }

    return (
        typeof o["firstName"] === "string" &&
        typeof o["lastName"] === "string" &&
        typeof o["age"] === "number" &&
        typeof o["style"] === "string" &&
        ["JAZZ", "ROCK"].includes(o["style"])
    );
}

const res = data.filter(isValidMusicianData).map((r) => {
    if (r.style === "JAZZ") {
        return new JazzMusician(r.firstName, r.lastName, r.age);
    }
    return new RockStar(r.firstName, r.lastName, r.age);
});

console.log(res);

res.forEach((r) => {
    if (r instanceof JazzMusician) {
        return r.swing();
    }
    return r.shout();
});
