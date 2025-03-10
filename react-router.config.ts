import type { Config } from "@react-router/dev/config";
import { db } from "./app/.server/db";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender() {
    const posts = await db.post.findMany({
      select: { slug: true },
    });
    return ["/", "/projects", "/blog"].concat(
      posts.map((post) => `/blog/${post.slug}`)
    );
  },
} satisfies Config;
