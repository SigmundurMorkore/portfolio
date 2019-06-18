module.exports = {
  siteMetadata: {
    title: `Sigmundur Mørkøre's Portfolio`,
    description: `Check out my portfolio!`,
    author: `@SigmundurM`,
    primaryColor: `#011627`,
    secondaryColor: `#FFFFFF`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sigmundur Mørkøre's Portfolio`,
        short_name: `Sigmundur's Portfolio`,
        start_url: `/`,
        background_color: `#011627`,
        theme_color: `#011627`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Brawler', 'Bree Serif'],
        display: 'swap',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
  ],
}
