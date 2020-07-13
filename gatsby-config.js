require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Hooks-lib-docs`,
    description: `Documentation of hooks-lib library`,
    author: `Roland Branten`,
    siteUrl: `https://hookslib.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "bs0t3ajp",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hooks-lib`,
        short_name: `hooks-lib`,
        start_url: `/`,
        background_color: `#ffae20`,
        theme_color: `#ffae20`,
        display: `standalone`,
        icon: `icon/icon.png`,
      },
    },
  ],
};
