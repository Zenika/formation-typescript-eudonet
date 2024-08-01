export function log<T>(element: T): void {
    console.log(element);
}

export const logged = <T, Arg, Res>(
    target: T,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<(...args: Arg[]) => Res>
): TypedPropertyDescriptor<(...args: Arg[]) => Res> => {
    const originalMethod = descriptor.value;

    if (originalMethod !== undefined) {
        descriptor.value = function (...args: Arg[]) {
            const result = originalMethod.apply(target, args);
            log(result);
            return result;
        };
    }

    return descriptor;
};

