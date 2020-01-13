const config = {
  author: "elaidina", // Site owner
  siteTitle: "attractive", // Site title.
  siteTitleShort: "attractive", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "attractive by elaidina", // Alternative site title for SEO.
  siteLanguage: "en", // Site language.
  siteDescription: "A blog about attractivity", // Website description used for RSS feeds/meta description tag.
  siteLogo: "static/favicons/favicon.png", // Logo used for manifest.
  siteUrl: "https://attractive.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "464217807633356", // FB Application ID for using app insights
  siteGATrackingID: "UA-153303709-3", // Tracking code ID for google analytics.
  disqusShortname: "gatsbyjs-starter-papan01", // Disqus shortname.
  twitterUserName: "", // twitter creator for SEO
  datePublished: "2019-12-08", // for SEO
  copyrightYear: "2019", // for SEO
  postsPerPage: 4, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: "github",
      url: "https://github.com/elaidina",
      iconClassName: "fab fa-github"
    },
    {
      label: "mail",
      url: "mailto:x@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "facebbok",
      url: "https://www.facebook.com/LauraisDrawing",
      iconClassName: "fab fa-facebook"
    },
    {
      label: "instagram",
      url: "https://www.instagram.com/laura.horackova",
      iconClassName: "fab fa-instagram"
    }
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: "Archives",
      url: "/archives",
      iconClassName: "fa fa-book-open"
    },
    {
      label: "Categories",
      url: "/categories",
      iconClassName: "fa fa-list-alt"
    },
    {
      label: "About",
      url: "/about",
      iconClassName: "fa fa-address-card"
    }
  ]
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
