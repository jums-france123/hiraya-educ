const pages = {
    index: `
        <h1>Welcome to Hiraya Educ</h1>
        <p>This is the home page.</p>
    `,

    algebra: `
        <h1>Algebra</h1>
        <p>Welcome to Algebra.</p>
    `,

    biology: `
        <h1>Biology</h1>
        <p>Welcome to Biology.</p>
    `,

    geometry: `
        <h1>Geometry</h1>
        <p>Welcome to Geometry.</p>
    `,

    "earth-science": `
        <h1>Earth Science</h1>
        <p>Welcome to Earth Science.</p>
    `,

    astronomy: `
        <h1>Astronomy</h1>
        <p>Welcome to Astronomy.</p>
    `,

    statistics: `
        <h1>Statistics</h1>
        <p>Welcome to Statistics.</p>
    `,

    html: `
        <h1>HTML</h1>
        <p>Learn HTML here.</p>
    `,

    css: `
        <h1>CSS</h1>
        <p>Learn CSS here.</p>
    `,

    javascript: `
        <h1>JavaScript</h1>
        <p>Learn JavaScript here.</p>
    `,

    games: `
        <h1>Games</h1>
        <p>Games section.</p>
    `,

    computer: `
        <h1>Computer</h1>
        <p>Computer section.</p>
    `,

    cellphone: `
        <h1>Cellphone</h1>
        <p>Cellphone section.</p>
    `
};

function loadPage() {
    const page = location.hash.slice(1) || "index";

    document.getElementById("content").innerHTML =
        pages[page] || "<h1>Page Not Found</h1>";
}

window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);