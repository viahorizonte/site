"use strict";

const PORT = process.env.DEV_PORT || 8080;

function calculateUrl() {
    if (process.env.NODE_ENV === "development") {
        return `localhost:${PORT}`;
    }

    /*
     * Netlify sets the following environment variables
     * https://www.netlify.com/docs/continuous-deployment/#environment-variables
     */
    return process.env.CONTEXT === "production" ? process.env.URL : process.env.DEPLOY_PRIME_URL;
}

module.exports = {
    title: "Via Horizonte - Site da comunidade",
    description: "Site da comunidade do edifício Via Horizonte no Alphaville Brasilia",
    banner: {
        text: null,
        foregroundColor: "#ffffff",
        backgroundColor: "#150b29"
    },
    url: calculateUrl(),
    links: {
        chat: "/chat",
        codeOfConduct: "/conduct",
        github: "https://github.com/viahorizonte/site",
    }
};
