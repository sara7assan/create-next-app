"use client"


async function getData(id){
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  const user = data.find(u => u.id == id)
  return {
    load: true,
    data: user
  }

}

export default function User({ params }) {

  const { id } = params

    const {load, data} = getData(id)

  
  return (
    <>
        {
          load? (
            <div className='user'>
              <p>Name: {data.name}</p>
              <p>Username: {data.username}</p>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
              <p>Website: {data.website}</p>
              <ul>
                <li>City: {data.address.city}</li>
                <li>Street: {data.address.street}</li>
                <li>Suite: {data.address.suite}</li>
              </ul>
            </div>) : (
          <p>Loading ....</p>
        )
        }
    </>
  )
}


