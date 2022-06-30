module.exports = {
  siteMetadata: {
    title: `pizzaamore`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/lang`,
        // supported language
        languages: [`pt`, `en`, `es`, `fr`, `it`],
        // language file path
        defaultLanguage: `pt`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      }
    }
  ],
};