import fetch from "node-fetch";

const authentication = { headers: { Authorization: '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' } };

fetch('https://api.github.com/repos/viniciusjosedev/project-trivia-react-redux/languages', authentication)

