enum NumberToString {
    zero,
    un,
    deux,
    trois,
    quatre,
    cinq,
    six,
    sept,
    huit,
    neuf,
}

export function returnPeopleAndLength(people: string[] = ['Miles', 'Mick']): [string, number][] {
    return people.map((person: string): [string, number] => [person, person.length]);
}

export function displayPeopleAndLength(people?: string[], literal?: boolean): void {
    function filterLength(personAndLength: [string, number]) {
        return personAndLength[1] <= 9;
    }

    let tuples = returnPeopleAndLength(people);
    if (literal) {
        tuples = tuples.filter(filterLength);
    }

    const tag = (strings: TemplateStringsArray, person: string, length: number) => {
        return person + strings[1] + (literal ? NumberToString[length] : length) + strings[2];
    };

    tuples.forEach(([person, length]) => {
        console.log(tag`${person} contient ${length} caractères`);
    });
}

export function displayPeopleAndLengthFunctionalSolution(people?: string[], literal?: boolean): void {
    let filteredPeople = people;
    let getDisplayedLength: (length: number) => string | number = length => length;
    if (literal && people !== undefined) {
        filteredPeople = people.filter(name => name.length <= 9);
        getDisplayedLength = length => NumberToString[length];
    }

    returnPeopleAndLength(filteredPeople).forEach(([name, length]) => console.log(`${name} contient ${getDisplayedLength(length)} caractères`));
}
