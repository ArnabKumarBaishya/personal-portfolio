import React from "react";

function Sec() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Dummy Section 2</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            cupiditate minus illo laborum dolorem et.{" "}
          </p>
          
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-600 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, dolor
            maiores expedita aperiam architecto ex!{" "}
          </p>
          
        </div>

        
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero
            vitae minus eos non amet.{" "}
          </p>
          
        </div>

        
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project Four</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla
            fugiat ullam deleniti natus culpa!{" "}
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default Sec;
