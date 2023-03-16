import { getPosts } from "../services";

const createSitemap = (posts) => {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  posts.forEach((post) => {
    sitemap += `<url>\n`;
    sitemap += `<loc>https://https://nextjs-blog-app-sigma-five.vercel.app/posts/${post.slug}</loc>\n`;
    sitemap += `<changefreq>weekly</changefreq>\n`;
    sitemap += `<priority>0.8</priority>\n`;
    sitemap += `</url>\n`;
  });

  sitemap += `</urlset>`;

  return sitemap;
};

export default async function sitemapXml(req, res) {
  const posts = await getPosts();
  const sitemap = createSitemap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
