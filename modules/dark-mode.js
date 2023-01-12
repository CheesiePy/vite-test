// create a dark mode toggle button
export function setupDarkModeToggle(button) {
    button.textContent = "Dark Mode"
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark')
    })
}