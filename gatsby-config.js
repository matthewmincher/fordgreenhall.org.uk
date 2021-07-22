module.exports = {
  pathPrefix: `/dev`,
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Ford Green Hall",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
	},
  ],
};
