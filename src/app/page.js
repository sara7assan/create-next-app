"use client"
import { useState, useEffect } from 'react'
import Link from "next/link"


export default function Home() {
  const [ data, setData ] = useState([])
  const [ load, setLoad ] = useState(false)
  useEffect(_=> {
    getData()
  }, [])
  async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    setLoad(true)
    setData(data)
  }

  return (
    <>
      <div className='ele'>
        {
          load? (
            data.length > 0 ? (
              data.map((item, i) => {
                return (

                  <Link key={i} href={`/user/${item.id}`}>
                    <div className='box'>
                      <p>Name: {item.name}</p>
                      <p>Username: {item.username}</p>
                      <p>Phone: {item.phone}</p>
                      <p>Website: {item.website}</p>
                      <p>Email: {item.email}</p>
                    </div>
                  </Link>

                )
              })
            ): (
              <p>Not found ..</p>
            )
          ): (
            <p>
              Loading ....
            </p>
          )
        }
      </div>
    </>
  )
}
