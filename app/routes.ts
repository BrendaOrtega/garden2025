import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/saas", "routes/saas.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/blog/:slug", "routes/blogpost.tsx"),
  route("/resources", "routes/resources.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/projects", "routes/projects.tsx"),
  route("/projects/flink", "routes/projects/flink.tsx"),
] satisfies RouteConfig;
