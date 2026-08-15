const dishes =
{
    pizza:
    [
        ["Margherita Sera", "pomidory San Marzano · fior di latte · bazylia", "32 zł"],
        ["Piccante", "spianata · nduja · czerwona cebula · mozzarella", "42 zł"],
        ["Verde", "ricotta · cukinia · pistacje · cytryna", "39 zł"]
    ],
    pasta:
    [
        ["Tagliatelle al ragù", "wolno gotowane ragù · grana padano", "41 zł"],
        ["Cacio e pepe", "pecorino romano · świeżo mielony pieprz", "36 zł"],
        ["Gnocchi al pomodoro", "pieczone pomidory · burrata · bazylia", "40 zł"]
    ],
    dolci:
    [
        ["Tiramisu della casa", "mascarpone · kawa · kakao", "22 zł"],
        ["Panna cotta", "wanilia · owoce sezonowe", "20 zł"],
        ["Affogato", "gelato waniliowe · espresso", "17 zł"]
    ]
};

const grid = document.querySelector("#menuGrid");
const tabs = document.querySelectorAll(".tab");

function renderMenu(kind)
{
    grid.innerHTML = dishes[kind].map(([name, description, price], i) => `<article class="dish"><small>0${i + 1} · ${kind}</small><h3>${name}</h3><p>${description}</p><span class="price">${price}</span></article>`).join("");
}

renderMenu("pizza");
tabs.forEach(tab => tab.addEventListener("click", () =>
{
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.menu);
}));

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navlinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeLightbox = () => lightbox.classList.remove("open");

document.querySelectorAll(".gallery-grid figure").forEach(figure =>
{
    figure.tabIndex = 0;
    const openImage = () =>
    {
        const image = figure.querySelector("img");
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add("open");
    };
    figure.addEventListener("click", openImage);
    figure.addEventListener("keydown", event =>
    {
        if (event.key === "Enter" || event.key === " ") openImage();
    });
});

lightbox.querySelector("button").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event =>
{
    if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event =>
{
    if (event.key === "Escape") closeLightbox();
});
document.querySelector("#year").textContent = new Date().getFullYear();
