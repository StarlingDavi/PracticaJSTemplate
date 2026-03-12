import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.port || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Arreglo de modelos — agrega un objeto aqui y aparece automaticamente en el sitio
const modelos = [
    { nombre: "Naomy Olsen", imagen: "img/team-1.jpg", edad: 22, altura: 185, peso: 55, busto: 79, cintura: 59, caderas: 89 },
    { nombre: "Pamela Torney", imagen: "img/team-2.jpg", edad: 22, altura: 185, peso: 55, busto: 79, cintura: 59, caderas: 89 },
    { nombre: "Joanne Irwin", imagen: "img/team-3.jpg", edad: 22, altura: 185, peso: 55, busto: 79, cintura: 59, caderas: 89 },
    { nombre: "Gillian Rowe", imagen: "img/team-4.jpg", edad: 22, altura: 185, peso: 55, busto: 79, cintura: 59, caderas: 89 },
    { nombre: "Naomy Olsen", imagen: "img/team-5.jpg", edad: 22, altura: 185, peso: 55, busto: 79, cintura: 59, caderas: 89 },
    { nombre: "Pamela Torney", imagen: "img/team-6.jpg", edad: 22, altura: 185, peso: 55, busto: 79, cintura: 59, caderas: 89 },
    { nombre: "Joanne Irwin", imagen: "img/team-7.jpg", edad: 22, altura: 185, peso: 55, busto: 79, cintura: 59, caderas: 89 },
    { nombre: "Gillian Rowe", imagen: "img/team-8.jpg", edad: 22, altura: 185, peso: 55, busto: 79, cintura: 59, caderas: 89 },
];

app.get("/", (req, res) => {
    res.render("index", { titulo: "Poseify - Home", modelos: modelos });
});

app.get("/about", (req, res) => {
    res.render("about", { titulo: "Poseify - About", modelos: modelos });
});

app.get("/service", (req, res) => {
    res.render("service", { titulo: "Poseify - Services" });
});

app.get("/team", (req, res) => {
    res.render("team", { titulo: "Poseify - Our Models", modelos: modelos });
});

app.get("/testimonial", (req, res) => {
    res.render("testimonial", { titulo: "Poseify - Testimonials" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { titulo: "Poseify - Contact" });
});

app.get("/404", (req, res) => {
    res.render("404", { titulo: "Poseify - 404" });
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
