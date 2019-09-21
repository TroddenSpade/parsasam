import Home from "./components/Home.vue";
import Post from "./components/Post.vue";
import Contact from "./components/Contact.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/contact", component: Contact },
  { path: "/post/:id", name: "post", component: Post, props: true }
];
