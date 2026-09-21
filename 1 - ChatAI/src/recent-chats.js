const CHAT_ICON_PATH = 'M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 ' +
  '9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 ' +
  '2,13.13 2,11C2,6.58 6.5,3 12,3Z';

export const RECENT_CHATS = [
  'Como ganar la lotería',
  'Colores Vintage',
  'Como farmear Aura',
  'Regulación masiva',
  'Trucos GTA',
  'Oliva o aceituna?',
  'Calcular impuesto',
  'Edita foto con musculos',
  'Bajar de peso',
  'Preparar Shandy',
  'Tasa dolar a bs',
];

/**
 * Builds the markup for one chat list item.
 * @param {string} label Chat title shown to the user.
 * @return {string} HTML markup for the <li> item.
 */
function renderChatItem(label) {
  return /* html */ `
    <li>
      <a href="#">
        <svg viewBox="0 0 24 24">
          <path d="${CHAT_ICON_PATH}"></path>
        </svg>
        <span class="label">${label}</span>
      </a>
    </li>
  `;
}

/**
 * Renders the list of recent chats into the given <ul> element.
 * @param {?HTMLUListElement} listElement Target list element.
 */
export function renderRecentChats(listElement) {
  if (!listElement) {
    return;
  }
  listElement.innerHTML = RECENT_CHATS.map(renderChatItem).join('');
}
