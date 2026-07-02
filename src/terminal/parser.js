export function parseCommand(input) {
  const trimmed = input.trim();

  if (!trimmed) {
    return {
      command: null,
      args: [],
      error: null,
    };
  }

  const parts = trimmed.split(/\s+/);
  const name = parts[0].toLowerCase();
  const args = parts.slice(1);

  return {
    command: name,
    args,
    error: null,
  };
}