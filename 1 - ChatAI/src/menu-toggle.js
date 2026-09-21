/**
 * Binds the click listener that collapses/expands the side menu.
 * Replaces the previous checkbox + :checked CSS-only approach.
 */
export function initMenuToggle() {
  const app = document.querySelector('.app');
  const toggleButton = document.querySelector('.brand');

  if (!app || !toggleButton) {
    return;
  }

  toggleButton.addEventListener('click', () => {
    app.classList.toggle('app--collapsed');
  });
}
