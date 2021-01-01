export const preloadImage = (path: string) =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = (img) => resolve(img)
    img.onerror = (err) => resolve(err)
    img.src = path
  })

export const preloadAllImages = (paths: string[]) =>
  Promise.all(paths.map(preloadImage)).then((images: any) =>
    Promise.resolve({
      images,
      length: images.length,
      error: images.filter((item) => item.type === 'error').length,
    })
  )
