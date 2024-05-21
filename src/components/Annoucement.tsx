// src/components/Annoucement.tsx

import React from "react";

const Annoucement = () => {
  return (
    <section>
      <div className="bg-indigo-600 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          Love Alpine JS?
          <a href="#" className="inline-block underline">
            Check out this new course!
          </a>
        </p>
      </div>
    </section>
  );
};

export default Annoucement;
