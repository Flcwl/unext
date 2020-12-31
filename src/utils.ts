const padStart = (str: string | number, length: number, pad: string): string => {
  const s = String(str)

  if (!s || s.length >= length) {
    return s
  }

  return `${Array(length + 1 - s.length).join(pad)}${str}`
}

const addZero = (str: string | number, length = 2): string => padStart(str, length, '0')

const initList = <T>(length: number, fill: T = undefined): T[] => {
  const arr = []
  for (let i = 0; i < length; ++i) {
    arr.push(fill)
  }
  return arr
}

export default {
  l: initList,
  z: addZero,
}
