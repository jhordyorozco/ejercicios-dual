/**
 * Handles in-page navigation for links marked with [data-target],
 * scrolling to the matching [data-section] element. Avoids relying on
 * id/fragment anchors, since components only expose classes and data
 * attributes.
 */
export function initNavigation() {
  document.body.addEventListener('click', (event) => {
    const link = event.target.closest('[data-target]');
    if (!link) {
      return;
    }

    const targetName = link.getAttribute('data-target');
    const target = document.querySelector(`[data-section="${targetName}"]`);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
}
