import React, { useState, useEffect } from "react"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [dogImageSrc, setDogImgSrc] = useState(null)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImgSrc(data.message))
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <p>Loading</p>
    )
  } else {
    return (
      <img src={dogImageSrc} alt="A Random Dog" />
    )
  }
}

export default App
