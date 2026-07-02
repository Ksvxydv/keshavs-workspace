let actions = {
  openWindow: null,
  setTheme: null,
  setAccentColor: null,
  setWallpaper: null,
  history: null,
};

export function registerTerminalActions(newActions) {
  actions = {
    ...actions,
    ...newActions,
  };
}

export function getTerminalActions() {
  return actions;
}
