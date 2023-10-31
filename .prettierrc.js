module.exports = {
    arrowParens: "avoid",
    bracketSpacing: true,
    endOfLine: "lf",
    printWidth: 120,
    singleQuote: true,
    semi: true,
    proseWrap: "preserve",
    quoteProps: "as-needed",
    trailingComma: "all",
    overrides: [
        {
            files: ["*.json"],
            options: {
                printWidth: 0,
                trailingComma: "none",
                proseWrap: "never",
            },
        },
        {
            files: ["*.yml"],
            options: {
                // YAML uses spaces, period. See https://yaml.org/spec/1.1/#id871998
                useTabs: false,
                tabWidth: 2,
            },
        },
        {
            files: ["*.md"],
            options: {
                useTabs: false,
                tabWidth: 2,
            },
        },
    ],
};
