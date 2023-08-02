export const getDatesFromString = (str: string | null): string => {
  const dateReg: RegExp = /\d{1,2}\/\d{1,2}\/\d{4}/g
  const res: string = str?.match(dateReg)?.join(', ') || ""
  return res
}