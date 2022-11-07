import { useState } from "react";
import Header from "./components/Header/Header";
import Undraw from "./assets/ud_projections.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <main>
        <div className="layout-container ">
          <h1 className="mb-14 pt-20 text-3xl">Hello React and Tailwind</h1>
          <div className="flex flex-row items-center justify-between">
            <div className="p-8">
              <img
                src={Undraw}
                alt="Ilustrace"
                className="max-w-lg hover:-translate-x-20 transition-all duration-300"
              />
            </div>
            <div className="">
              <p className="text-white bg-slate-700 p-4 max-w-md rounded-md shadow-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                consequuntur cupiditate. Rerum iste nobis mollitia suscipit
                ratione. Ad illo modi quas odio similique. Temporibus porro
                officia harum illo nisi voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
