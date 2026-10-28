
document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-toggle");

    if (!themeButton) {
        console.error('Não encontrei o botão com id="theme-toggle".');
        return;
    }

    // Recupera o tema salvo
    const savedTheme = localStorage.getItem("site-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateThemeButton() {
        const isDark = document.body.classList.contains("dark-mode");

        themeButton.textContent = isDark ? "☀" : "☾";
        themeButton.setAttribute(
            "aria-label",
            isDark ? "Ativar modo claro" : "Ativar modo escuro"
        );
        themeButton.setAttribute("aria-pressed", String(isDark));
    }

    updateThemeButton();

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "site-theme",
            isDark ? "dark" : "light"
        );

        updateThemeButton();

        console.log("Tema atual:", isDark ? "escuro" : "claro");
    });

    
 
});
