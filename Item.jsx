import React, { useState } from 'react';
import { options } from "../data";

const Item = () => {
  const [cartlist, setcartlist] = useState([]);
  //useEffect(() => {}, [categ]);
  return (
    <div className="mt-3 md:mt-6 relative">
      <section className="px-4 flex items-center justify-center">
        <p className="text-xl md:text-2xl font-semibold bg-yellow-200 inline border-solid border-4 border-red-600 rounded-lg hover:border-dotted px-4 py-2 font-serif">
          Our Items
        </p>
      </section>
      
    </div>
  )
}

export default Item;