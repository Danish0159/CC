require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: ["gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }],
};
