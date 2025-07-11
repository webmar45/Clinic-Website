import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const AllServices = () => {
  const { servicestype } = useParams(); // Extract service type from URL
  const [filterServices, setFilterServices] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { services } = useContext(AppContext);

  const applyFilter = () => {
    if (servicestype) {
      setFilterServices(
        services.filter((service) => service.servicetype.toLowerCase() === servicestype.toLowerCase())
      );
    } else {
      setFilterServices(services);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [services, servicestype]);

  return (
    <div className="mt-32 mx-6">
      <p className="text-blue-900 text-lg">Browse through the type of services.</p>
      <div className="flex flex-col sm:flex-row items-start gap-8 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-blue-900 text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div className={`flex-col gap-4 text-blue-900 text-lg font-semibold ${showFilter ? "flex" : "hidden sm:flex"}`}>
          <p
            onClick={() =>
              servicestype === "Skin Service" ? navigate("/services") : navigate("/services/Skin Service")
            }
            className={`w-[94vm] sm:w-auto pl-1.5 pr-16 border-2 border-blue-900 rounded transition-all cursor-pointer ${
              servicestype === "Skin Service" ? "bg-indigo-100 text-blue-900" : ""
            }`}
          >
            Skin Services
          </p>
          <p
            onClick={() =>
              servicestype === "Hair Service" ? navigate("/services") : navigate("/services/Hair Service")
            }
            className={`w-[94vm] sm:w-auto pl-1.5 pr-16 border-2 border-blue-900 rounded transition-all cursor-pointer ${
              servicestype === "Hair Service" ? "bg-blue-100 text-blue-900" : ""
            }`}
          >
            Hair Services
          </p>
        </div>
        <div className="w-full grid grid-cols-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 gap-y-6">
          {filterServices.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-900 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col h-full shadow-lg shadow-blue-900"
              key={index}
            >
              <img className="w-full h-48 object-cover border-b-4 border-blue-900" src={item.image} alt="" />
              <div className="p-4 flex-grow">
                <p className="text-blue-900 font-semibold text-xl">{item.category}</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
