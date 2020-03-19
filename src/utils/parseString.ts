export function parseString(str: string) {
  const parser = new DOMParser();

  const doc = parser.parseFromString(str, 'text/html');
  const text = doc.body.textContent;

  if (!text) return '';

  return text;
}
