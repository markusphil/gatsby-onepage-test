export const idFromName = name => {
  if (!name) return null
  return name
    .toLowerCase()
    .split(/ +/)
    .join('-')
}
