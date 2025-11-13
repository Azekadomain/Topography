const STORAGE_KEY = 'topo_attempts_v1';

function getLastAttempt() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;

  try {
    const store = JSON.parse(data);
    return store.length ? store[store.length - 1] : null;
  } catch {
    return null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const last = getLastAttempt();
  const el = document.getElementById('last-result');

  if (el) {
    if (last) {
      const dateStr = new Date(last.at).toLocaleString();
      el.textContent = `Последний тест: ${last.score}/${last.total} (${last.percent}%) — ${dateStr}`;
    } else {
      el.textContent = 'Тест ещё не проходили';
    }
  }
});
