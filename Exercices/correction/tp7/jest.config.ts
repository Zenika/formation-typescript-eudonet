export default {
    coverageProvider: "v8",
    rootDir: "./src",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};
