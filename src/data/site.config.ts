interface SiteConfig {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  shareMessage: string;
  paginationSize: number;
}

export const siteConfig: SiteConfig = {
  author: "BugaPunk", // Site author
  title: "BitLab Blog", // Site title.
  description: "Blog del grupo de desarrollo de BitLab.", // Description to display in the meta tags
  lang: "es-ES",
  ogLocale: "es-ES",
  shareMessage: "Enviar este post", // Message to share a post on social media
  paginationSize: 3, // Number of posts per page
};
