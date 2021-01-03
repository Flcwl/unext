type TrimType = 'left' | 'right'

const trim = (str: string, char: string, type?: TrimType) => {
  if (!char) {
    return str.trim()
  }

  if (type == 'left') {
    return str.replace(new RegExp('^\\' + char + '+', 'g'), '')
  } else if (type == 'right') {
    return str.replace(new RegExp('\\' + char + '+$', 'g'), '')
  }

  return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '')
}

export default trim
