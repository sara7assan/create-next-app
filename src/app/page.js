"use client"

import Link from "next/link"

async function getData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return {
    load: true,
    data: data
  }
}

export default function Home() {

    const {data, load} = getData()

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
