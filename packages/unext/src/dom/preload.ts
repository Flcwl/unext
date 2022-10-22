const loadImage = (path: string) =>
  new Promise((resolve) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = resolve
    img.src = path
  })

/**
 * preload images.
 */
export const preload = (...paths: string[]) =>
  Promise.all<any>(paths.map(loadImage)).then((images) =>
    Promise.resolve({
      images,
      length: images.length,
      error: images.filter((item) => item.type === 'error').length,
    })
  )
