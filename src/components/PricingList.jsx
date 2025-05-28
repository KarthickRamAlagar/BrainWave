// import { check } from "../assets";
import { contributors } from "../constants";
// import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex flex-col gap-[2rem] max-lg:flex-wrap justify-center">
      {/* Original Contributors */}
      <div className="flex gap-[1rem] max-lg:flex-wrap justify-center">
        {contributors
          .filter((contributor) => contributor.id !== "0") // Skip the item with id "0"
          .map((contributor) => (
            <div
              key={contributor.id}
              className="w-[19rem] max-lg:w-full h-full px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-n-6">
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="h4 mb-2 text-center">{contributor.name}</h4>
              <p className="body-2 text-n-1/70 mb-4 text-center">
                {contributor.role}
              </p>
            </div>
          ))}
      </div>
      {/* Additional Section */}
      <div className="mt-8">
        <h4 className="h4 text-center mb-6">Special Mention</h4>
        <div className="flex gap-[1rem] max-lg:flex-wrap justify-center">
          {contributors.slice(0, 1).map((contributor) => (
            <div
              key={`gradient-${contributor.id}`}
              className="w-[19rem] max-lg:w-full h-full px-6 py-8 flex flex-col items-center relative isolate"
            >
              {/* Gradient Border - Full perimeter */}
              <div className="absolute inset-0 rounded-[2rem] p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 -z-10">
                <div className="absolute inset-0 rounded-[2rem] bg-n-8"></div>
              </div>

              {/* Image container without border */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="h4 mb-2 text-center">{contributor.name}</h4>
              <p className="body-2 text-n-1/70 mb-4 text-center">
                {contributor.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingList;
