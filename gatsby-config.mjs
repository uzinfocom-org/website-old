import path from 'path';
import fetch from "node-fetch";
import { fileURLToPath } from 'url';
import { createHttpLink } from "apollo-link-http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = {
    siteMetadata: {
        name: "Uzinfocom Open Source",
        title: `O'zbekistondagi Birinchi Open Source Rivojlantiruvchi Jamiyat`,
        description: `O'zbekistondagi Birinchi Open Source Rivojlantiruvchi Jamiyat.`,
        author: `@uzinfocom-org`,
        siteUrl: `https://oss.uzinfocom.uz`,
        social: {
            github: "uzinfocom-org",
            telegram: "uzinfocom_oss",
            discord: "JkXFQpScFj",
            email: "cctld@uzinfocom.uz",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-no-theme-flash",
            options: {
                storageKey: "theme-type",
                lightClassName: "light",
                darkClassName: "dark",
            },
        },
        "gatsby-plugin-top-layout",
        {
            resolve: `gatsby-plugin-material-ui`,
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `red`,
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Uzinfocom Open Source`,
                short_name: `Uzinfocom`,
                description: "Uzinfocom Open Source",
                lang: "en",
                start_url: `/`,
                background_color: `#000`,
                theme_color: `#000`,
                display: "standalone",
                icon: `src/images/logo-dark.png`,
                legacy: false,
                // include_favicon: false,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-catch-links`,
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "Github",
                fieldName: "github",
                createLink: () =>
                    createHttpLink({
                        uri: `https://api.github.com/graphql`,
                        headers: {
                            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                        },
                        fetch,
                    }),
            },
        },
        {
            resolve: "gatsby-plugin-no-sourcemaps",
        },
        {
            resolve: "gatsby-plugin-sitemap",
        },
        `gatsby-plugin-offline`,
    ],
};

export default config;