// Check if the browser prefers dark mode
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  const favicon = document.getElementById('favicon')
  favicon.href = './assets/icon-dark.svg' // Path to the dark mode favicon
}

console.log(
  `
  I implemented that portfolio for my awesome wife.
  Actually I'm a Senior ReactJs Dev.
  +359 883 48 51 71
  `)
