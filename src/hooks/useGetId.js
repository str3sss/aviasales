import { useState, useEffect } from 'react'

export const useGetId = () => {
  const [id, setId] = useState(undefined)

  useEffect(() => {
    fetch('https://front-test.dev.aviasales.ru/search')
      .then((r) => r.json())
      .then((r) => setId(r.searchId))
      .catch((e) => console.log(e))
  }, [])

  return id
}
