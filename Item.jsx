import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic6 from "../Images/pic6.jpg";
import pic7 from "../Images/pic7.jpg";
import pic8 from "../Images/pic8.jpg";
import pic4 from "../Images/pic4.jpg";
import pic10 from "../Images/pic10.jpg";
import pic14 from "../Images/pic14.jpg";
import pic17 from "../Images/pic17.jpg";
import pic18 from "../Images/pic18.jpg";
import pic5 from "../Images/pic5.jpg";
import pic9 from "../Images/pic9.jpg";
import pic11 from "../Images/pic11.jpg";
import pic12 from "../Images/pic12.jpg";
import pic13 from "../Images/pic13.jpg";
import pic15 from "../Images/pic15.jpg";
import pic20 from "../Images/pic20.jpg";
import pic21 from "../Images/pic21.jpg";
import pic22 from "../Images/pic22.jpg";
import pic23 from "../Images/pic23.jpg";
import pic24 from "../Images/pic24.jpg";

const Item = () => {
  return (
    <div className="mt-3 md:mt-16 relative">
      <section className="px-4 flex items-center justify-center">
        <p className="text-xl md:text-2xl font-semibold bg-yellow-200 inline border-solid border-4 border-red-600 rounded-lg hover:border-dotted px-4 py-2 font-serif">
          Our Items
        </p>
      </section>
      <div className="mt-10 relative ml-7">
        <p className="inline text-xl md:text-2xl font-semibold bg-[#ea580c] hover:bg-[#fdba74] rounded-xl font-mono p-3 ml-5 md:ml-40">
          Cakes
        </p>
      </div>
      <div className="mt-10 ml-1 md:ml-7 flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center">
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic1} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Strawberry Special Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 1200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic2} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Chocolate Truffle Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 1000
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic3} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Strawberry Floral Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 900
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic6} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco-strawberry Fussion Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 1000
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic7} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Orange Chocolate Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 980
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic8} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Fruit 'N' Nut Chocolate Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 1300
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-10 relative ml-7">
        <p className="inline text-xl md:text-2xl font-semibold bg-[#ea580c] hover:bg-[#fdba74] rounded-xl font-mono p-3 ml-5 md:ml-40">
          Pastries
        </p>
      </div>
      <div className="mt-10 ml-1 md:ml-7 flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center">
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic4} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco Delight Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic10} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco Coffee Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic14} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Black Current Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 300
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic17} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Red Velvet Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic18} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Brownie Sundae
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 350
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic5} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco Wrap Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-10 relative ml-7">
        <p className="inline text-xl md:text-2xl font-semibold bg-[#ea580c] hover:bg-[#fdba74] rounded-xl font-mono p-3 ml-5 md:ml-40">
          Cupcakes
        </p>
      </div>
      <div className="mt-10 ml-1 md:ml-7 flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center">
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic9} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Cherry-topped Vanilla Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic11} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Floral Strawberry Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic12} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco-vanilla Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic13} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Fruit 'N' Nut Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic15} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Sweet Strawberry Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 150
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-10 relative ml-7">
        <p className="inline text-xl md:text-2xl font-semibold bg-[#ea580c] hover:bg-[#fdba74] rounded-xl font-mono p-3 ml-5 md:ml-40">
          Donuts
        </p>
      </div>
      <div className="mt-10 ml-1 md:ml-7 flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center">
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic20} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Blueberry Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 150
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic21} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Dark Chocolate Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic22} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco-coco Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic23} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Creamy Fussion Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 150
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic24} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Combo Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item;