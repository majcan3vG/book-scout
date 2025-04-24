export function isNotValidSearchTerm(str: string | undefined, limit: number): boolean {
  if (!str || str === '') return true;

  const regex = new RegExp(`\\s{${limit},}`)
  return regex.test(str)
}
