import React from 'react'

function Card({username = " HC ", post = "not assigned yet"}) {
  //console.log(props)
  return (
    <div>
      {/* <img src="https://images.pexels.com/photos/11168071/pexels-photo-11168071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="heart" />
      <h1 classNameName="text-2xl bg-green-500 p-3 rounded">A card for photos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, maxime?</p> */}

      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, veritatis!
            </p>
          </blockquote>
          <figcaption className="font-m">
            <div>
              {username}
            </div>
            <div>
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Card
