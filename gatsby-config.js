require("dotenv").config();

module.exports = {
   siteMetadata: {
      title: `New project`,
      description: `undefined`,
      author: `Roland Branten`
      //siteUrl: ``,
   },
   plugins: [
      // `gatsby-plugin-sitemap`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `assets`,
            path: `${__dirname}/src/assets`
         }
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `new`,
            short_name: `new`,
            start_url: `/`,
            background_color: `#6b37bf`,
            theme_color: `#6b37bf`,
            display: `standalone`,
            icon: `icon/icon.png`
         }
      },
      `gatsby-plugin-offline`,
      {
         resolve: "gatsby-plugin-react-svg",
         options: {
            rule: {
               include: /\.inline\.svg$/
            }
         }
      }
      //   {
      //     resolve: `gatsby-source-contentful`,
      //     options: {
      //        spaceId: process.env.CONTENTFUL_SPACE_ID,
      //        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      //     }
      //  },
   ]
};
