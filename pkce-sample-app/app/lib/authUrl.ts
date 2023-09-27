import { useState, useEffect } from 'react'
 
export function AuthURL() {
  const [data, setData] = useState('') 
  useEffect(() => {
    fetch('/api/auth/authURL',{method: 'POST'})
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
  }, [])
return data
}
