import React from 'react';

const cart = () => {
  return (
    <div className="py-40">
        <p className="text-xl md:text-2xl font-semibold px-10 font-mono text-[#dc2626]">
          No orders yet!
        </p>
        <div className="flex items-center justify-center">
            <p className="inline text-2xl font-bold font-mono bg-[#f87171] rounded-xl m-auto p-4 ">
                See your orders
            </p>
        </div>
        <div className="mt-10 flex flex-col gap-20 bg-[#fef2f2] font-serif">
            <div className="flex flex-col gap-5 px-20">
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Item:
                    </p>
                    <p className="text-m md:text-xl">
                        Black Current Pastry
                    </p>
                </section>
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Price:
                    </p>
                    <p className="text-m md:text-xl">
                        200
                    </p>
                </section>
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Quantity:
                    </p>
                    <p>
                        <input type="number" defaultValue="1" className="w-10 bg-[#d6d3d1] rounded-md"></input>
                    </p>
                </section>
            </div>
            <div className="flex flex-col gap-5 px-20">
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Item:
                    </p>
                    <p className="text-m md:text-xl">
                        Red Velvet Pastry
                    </p>
                </section>
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Price:
                    </p>
                    <p className="text-m md:text-xl">
                        200
                    </p>
                </section>
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Quantity:
                    </p>
                    <p>
                        <input type="number" defaultValue="1" className="w-10 bg-[#d6d3d1] rounded-md"></input>
                    </p>
                </section>
            </div>
            <div className="flex flex-col gap-5 px-20">
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Item:
                    </p>
                    <p className="text-m md:text-xl">
                        Brownie Sundae
                    </p>
                </section>
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Price:
                    </p>
                    <p className="text-m md:text-xl">
                        200
                    </p>
                </section>
                <section className="flex gap-10">
                    <p className="text-m md:text-xl font-bold">
                        Quantity:
                    </p>
                    <p>
                        <input type="number" defaultValue="1" className="w-10 bg-[#d6d3d1] rounded-md"></input>
                    </p>
                </section>
            </div>
            <div>
                <section className="flex gap-5 items-center justify-center">
                    <p className="text-m md:text-2xl font-semibold">
                        Total price:
                    </p>
                    <p className="text-m md:text-2xl">
                        600
                    </p>
                </section>
            </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
            <button className="inline text-lg bg-[#e87979] hover:bg-[#f0abfc] rounded-lg items-center font-mono p-4">
                    Proceed To Buy
            </button>
        </div>
    </div>
  )
}

export default cart