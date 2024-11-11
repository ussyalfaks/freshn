

import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 418) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative opacity-95 z-50 h-[600px] bg-gray-100">
      <div
        className="herobg absolute inset-0 bg-cover bg-center -z-10"
      ></div>
      <div className="absolute inset-0 bg-[#0d213b80] opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#F9F9F9]">
        <h1 className="ebgaramond px-3  text-4xl md:text-4xl font-bold uppercase text-center mb-4">
          Where comfort MEETS STYLE
        </h1>
        <p className="text-md w-64 text-center md:w-full mb-8 font-raleway leading-normal">
          Book The Perfect Stay For Your Next Adventure
        </p>

        {/* Conditionally apply 'fixed' class based on scroll */}
        <div className={`${isFixed ? 'md:fixed md:top-0 md:left-0 md:w-full md:z-50' : ''}`}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}





// import SearchBar from './SearchBar';

// export default function Hero() {
//   return (
//     <div className="relative opacity-95 h-[600px] bg-gray-100">
//       <div className="absolute inset-0 bg-cover bg-center -z-10"  style={{backgroundImage: "url('/herobg.jpeg')"}}></div>
//       <div className="absolute inset-0 bg-[#0d213b80] opacity-50"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#F9F9F9]">
//         <h1 className="font-ebgaramond text-4xl font-bold uppercase text-center mb-4">Where comfort MEETS STYLE</h1>
//         <p className="text-md mb-8 font-raleway leading-normal">Book The Perfect Stay For Your Next Adventure</p>
//         <SearchBar className="fixed" />
//       </div>
//     </div>
//   );
// }