module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "web-travel",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://api.apito.io/secured/graphql',
        headers:{
          Authorization:'Bearer 38UKCzzIe7CzBAGLrp9xQEdXLhAbmjuc0jz4k9M2uCM0HnVdMCqNGQB7zFXXFGvkaqMOYOm9JVUx2C66NR6wcPGZSB2RWqbkcnrk2AOCUQ9tquY8gvF53mwm6BeVeKcLfntepotpNS95ZlA6aqfVX4u9d7cDg7ppDFpjNArrIyiYC1Qi7W'
        }
      }
    }
  ],
};
