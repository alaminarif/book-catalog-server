import express from "express";
import { BookRoutes } from "../modules/books/books.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

/*
https://i.ibb.co/pr3KXh3/pngegg-2.png
https://i.ibb.co/0yGTYSz/pngegg-1.png
https://i.ibb.co/fkqrYWQ/pngegg.png
https://i.ibb.co/bbSdQdf/Pngtree-book-cover-640312.png
https://i.ibb.co/8KHPGPc/Book-PNG-Isolated-HD.png
https://i.ibb.co/bdDX2kJ/Book-PNG-Isolated-Picture.png
https://i.ibb.co/FKmJQBY/Book-PNG-Isolated-Pic.png
https://i.ibb.co/89PyXF7/Book-PNG-File.png
https://i.ibb.co/8Nf2p12/Book-Transparent-Background.png
https://i.ibb.co/dK4mq5J/Book-Stack-PNG-HD-Isolated.png
https://i.ibb.co/SwVskbZ/hero-photo.jpg
https://i.ibb.co/B2nhTYR/photo-1589829085413-56de8ae18c73.jpg
*/
