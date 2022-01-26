import { useState } from 'react'
import {Form} from 'remix'
import GenreItem from './GenreItem'


function GenreList() {
  const LI_STYLES = "flex items-center flex-col cursor-pointer px-2 text-center py-6 text-xl justify-between m-2 bg-white border-2 border-black rounded-full w-32 h-32"
  
  return (
    <Form className='flex flex-wrap justify-center'>
      <GenreItem genre='numbers' />
      <GenreItem genre='letters' />
      <GenreItem genre='problems' />
      <GenreItem genre='sharing' />
      <GenreItem genre='emotions' />
      <GenreItem genre='manners' />
    </Form>
  )
  }
//   return (
//     <ul className="flex flex-wrap justify-center">
//       <li className={LI_STYLES}>
//         <p className="">Letters</p>
//       </li>
//       <li className={LI_STYLES}>
//         <p className="">Numbers</p>
//         <p>$</p>
//       </li>
//       <li className={LI_STYLES}>
//         <p className="">Adventure</p>
//       </li>
//       <li className={LI_STYLES}>
//         <p className="">Curiousity</p>
//       </li>
//       <li className={LI_STYLES}>
//         <p className="">Problem Solving</p>
//       </li>
//       <li className={LI_STYLES}>
//         <p className="">Funny</p>
//       </li>
//       <li className={LI_STYLES}>
//         <p className="">Funny</p>
//       </li>
//       <li className={LI_STYLES}>
//         <p className="">Funny</p>
//       </li>
//     </ul>
//   )
// }

export default GenreList
