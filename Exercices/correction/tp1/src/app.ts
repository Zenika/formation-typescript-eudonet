function sayHello(nom: string) {
    return 'Bonjour, ' + nom;
}

const user = 'Zenika';

// [ts] Cannot find name 'console'.
// Use npm install @types/node if it's a Node/terminal app, or use "lib": ["dom"] in tsconfig file if it's a browser app.
console.log(sayHello(user));
