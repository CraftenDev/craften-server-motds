const firstLine = (feature) => `&r&7&cCr&6af&ete&an &2Se&3rv&9er&r&7&8 | &6${feature} &e+ viel mehr&8 | &71.8-1.10`
const news = [
  'Jetzt mit End!',
  'Besser als je zuvor!',
  'Kann Spuren von Creepern enthalten.',
  'Keep calm and play on Craften.'
]
const dynamicSecondLines = [
  'Worauf wartest du noch, &6%player&c?',
  'Deine Insel wartet auf dich, &6%player&c!'
]
const features = [
  'Skyblock',
  'Survival',
  'Build',
  'Creative',
  'Paintball',
  'Mob Arena'
]

console.log('motds:')
console.log('  generic:')
features.forEach((feature) => {
  news.forEach((newsLine) => {
    console.log(`  - '${firstLine(feature)}   &c${newsLine}'`)
  })
})

console.log('  dynamic:')
features.forEach((feature) => {
  news.forEach((newsLine) => {
    console.log(`  - '${firstLine(feature)}   &c${newsLine}'`)
  })
  dynamicSecondLines.forEach((line) => {
    console.log(`  - '${firstLine(feature)}   &c${line}'`)
  })
})