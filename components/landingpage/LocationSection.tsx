
import Map from '../Map';

export const LocationSection = () => {
  return (
    <section id="location" className="pt-16 md:pt-32">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold sm:text-4xl mb-6">
          Visit Our Golf Course
        </h1>
        <p className="text-gray-700 mb-6">
          Find us on the map below and plan your visit. 
        </p>
          <Map />
      </div>  
    </section>
  );
};

export default LocationSection;
