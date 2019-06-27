module.exports = {
  siteMetadata: {
    title: `Sigmundur Mørkøre's Portfolio`,
    description: `Check out my portfolio!`,
    author: `@SigmundurM`,
    primaryColor: `#011627`,
    secondaryColor: `#FFFFFF`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/_projects`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // Gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
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
        icon: `static/images/profile.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Brawler', 'Bree Serif'],
        display: 'swap',
      },
    },
    'gatsby-plugin-netlify-cms',
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
