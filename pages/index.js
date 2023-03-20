import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getCompanyData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://icamp-backend.onrender.com/api/companies"
        );
        setCompanies(res?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getCompanyData();
  }, []);

  return (
    <div className="w-full flex items-center justify-center max-w-7xl px-2 py-2">
      <div className="relative overflow-x-auto  sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                POC
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
              <th scope="col" className="px-6 py-3">
                Stipend
              </th>
              <th scope="col" className="px-6 py-3">
                Mode
              </th>
            </tr>
          </thead>
          <tbody>
            {companies?.map((company, i) => {
              return (
                <tr className="bg-white border-b " key={i}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {company?.name}
                  </th>
                  <td className="px-6 py-4">{company?.website}</td>
                  <td className="px-6 py-4">{company?.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-start justify-center">
                      <p>{company?.poc?.name}</p>
                      <p>{company?.poc?.phone}</p>
                      <p>{company?.poc?.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {company?.internshipDetails?.duration?.min} -{" "}
                    {company?.internshipDetails?.duration?.max} months
                  </td>
                  <td className="px-6 py-4">
                    Rs {company?.internshipDetails?.stipend?.min} - Rs{" "}
                    {company?.internshipDetails?.stipend?.max}{" "}
                  </td>
                  <td className="px-6 py-4">{company?.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
