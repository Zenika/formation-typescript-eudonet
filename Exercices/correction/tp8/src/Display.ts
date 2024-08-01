import { log } from './Log';
import * as _ from 'lodash';

// No need to export, Dependency Inversion Principle
// cf: clean architecture (https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
interface ElementToString {
    toString: () => string
}

export default function <T extends ElementToString>(items: T[]): void {
    _.each(items, (item) => {
        log(item.toString());
    });
}
