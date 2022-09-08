import React from "react";
import { Nav } from "./components";
import { Home } from "./components";
import { Item } from "./components";
import { Cart } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () =>{
    return (
    <div className="w-screen h-auto flex flex-col">
        <Nav />
        {/* <Home className="mt-16 md:mt-20 py-8 md:py-2 w-full" />
        <Item />
        <Cart /> */}
        <main>
            <Routes>
                <Route path="/*" element={<Home className="mt-16 md:mt-20 py-8 md:py-2 w-full" />} />
                <Route path="/item" element={<Item />} />
                <Route path="/cart" element={<Cart className="mt-40" />} />
            </Routes>
        </main>
    </div>
    );
};
export default App;