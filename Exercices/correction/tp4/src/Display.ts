import { log } from './Log';

// No need to export, Dependency Inversion Principle
// cf: clean architecture (https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
interface ElementToString {
    toString: () => string
}

export default function <T extends ElementToString>(items: T[]): void {
    items.forEach((item) => {
        log(item.toString());
    });
}
