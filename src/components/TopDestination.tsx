import Image from "next/image"

export default function TopDestination() {
  const destinations = [
    { name: "Abuja", image: "/TD3.png" },
    { name: "Lagos", image: "/TD4.png" },
    { name: "Port-harcourt", image: "/TD2.png" },
    { name: "Kaduna", image: "/TD3.png" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-cinzel mb-6">Top Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div key={destination.name} className="relative rounded-lg overflow-hidden ">
            <Image
              src={destination.image}
              alt={`${destination.name} cityscape`}
              width={400}
              height={450}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full">
              <div className="flex items-center">
              <svg
                  fill="#FFFFFF"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 mr-2"
                >
                  <path d="M236,116h-8.72266A100.19438,100.19438,0,0,0,140,28.72266V20a12,12,0,0,0-24,0v8.72266A100.19438,100.19438,0,0,0,28.72266,116H20a12,12,0,0,0,0,24h8.72266A100.19438,100.19438,0,0,0,116,227.27734V236a12,12,0,0,0,24,0v-8.72266A100.19438,100.19438,0,0,0,227.27734,140H236a12,12,0,0,0,0-24Zm-96,87.0437V200a12,12,0,0,0-24,0v3.0437A76.17428,76.17428,0,0,1,52.95654,140H56a12,12,0,0,0,0-24H52.95654A76.17428,76.17428,0,0,1,116,52.9563V56a12,12,0,0,0,24,0V52.9563A76.17428,76.17428,0,0,1,203.04346,116H200a12,12,0,0,0,0,24h3.04346A76.17428,76.17428,0,0,1,140,203.0437ZM128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20.0226,20.0226,0,0,1,128,148Z" />
                </svg>
                <span>{destination.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}