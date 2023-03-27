import { useEffect, useState } from "react";
import axios from "axios";

const StudentListing = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getCompanyData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://student-backend-99si.onrender.com/api/students"
        );
        setStudents(res?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getCompanyData();
  }, []);
  return (
    <div className="flex items-center justify-center w-full px-2 py-2 max-w-7xl">
      {isLoading ? (
        <div className="w-10 h-10 bg-transparent rounded-full border-t-[2px] border-teal-500 animate-spin" />
      ) : (
        <div className="flex flex-col w-full">
          <p className="p-6 text-lg font-bold text-white uppercase bg-green-600">
            Total Registrations: {students.length}
          </p>
          <div className="relative w-full overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sl No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Roll No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Branch
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    cgpa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {students?.map((student, i) => {
                  return (
                    <tr className="bg-white border-b " key={i}>
                      <td className="px-6 py-4">{i + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {student?.name}
                      </th>
                      <td className="px-6 py-4">{student?.roll}</td>
                      <td className="px-6 py-4">{student?.email}</td>
                      <td className="px-6 py-4">{student?.phone}</td>
                      <td className="px-6 py-4">{student?.branch}</td>
                      <td className="px-6 py-4">{student?.gender}</td>
                      <td className="px-6 py-4">{student?.cgpa}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col items-start justify-center">
                          <p>{student?.address?.state}</p>
                          <p>{student?.address?.city}</p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentListing;
