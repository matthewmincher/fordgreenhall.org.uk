
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.fordgreenhall.org.uk",
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
	    name: "events",
	    path: `./src/content/`,
	  },
      __key: "events"
	},
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
	},
    {
      resolve: `gatsby-transformer-remark`,
      options: {}
    },
    {
	  resolve: `gatsby-plugin-webfonts`,
	  options: {
		  fonts: {
			  google: [
				  {
					  family: "Meddon",
					  variants: ["400"],
					  //subsets: ['latin']
					  //text: 'Hello'
					  fontDisplay: 'block',
					  //strategy: 'selfHosted' // 'base64' || 'cdn'
				  },
				  {
					  family: "Fredericka the Great",
					  variants: ["400"],
					  //subsets: ['latin']
					  //text: 'Hello'
					  fontDisplay: 'block',
					  //strategy: 'selfHosted' // 'base64' || 'cdn'
				  },
			  ],
		  },
		  // formatAgents: {
		  //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
		  //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
		  //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
		  //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
		  // },
		  //formats: ['woff2', 'woff'],
		  //useMinify: true,
		  //usePreload: true,
		  //usePreconnect: false,
	  },
    },
	{
	  resolve: `gatsby-plugin-manifest`,
	  options: {
		  name: `Ford Green Hall`,
		  short_name: `Ford Green Hall`,
		  start_url: `/`,
		  background_color: `#060606`,
		  theme_color: `#8f8f6e`,
		  display: `standalone`,
		  icon: `src/images/icon.png`
	  },
	}
  ],
};
