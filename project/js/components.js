/**
 * Loads an HTML component into a target element.
 * Auto-detects base path: root (index.html) vs pages/ subdirectory.
 */
async function loadComponent(selector, url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load ${url}`);
        const html = await res.text();
        const el = document.querySelector(selector);
        if (el) el.innerHTML = html;
    } catch (err) {
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Detect if we're at root or inside pages/
    const isRoot = !location.pathname.includes("/pages/");
    const base = isRoot ? "./components" : "../components";
    loadComponent("#site-header", `${base}/header.html`);
    loadComponent("#site-footer", `${base}/footer.html`);
});
