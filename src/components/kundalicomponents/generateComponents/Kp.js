import React from 'react';

const Kp = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="flex flex-wrap -mx-4">
        {/* Bhav Chalit Chart */}
        <div className="w-full xl:w-1/3 lg:w-1/2 md:w-full px-4 mb-6">
          <div className="bg-white p-6 shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Bhav Chalit Chart</h2>
            <div className="flex justify-center">
              <canvas id="kpChart" width="700" height="700" className="w-44 h-44"></canvas>
            </div>
          </div>
        </div>

        {/* Ruling Planets */}
        <div className="w-full xl:w-2/3 lg:w-1/2 md:w-full px-4 mb-6">
          <div className="bg-white p-6 shadow-md rounded">
            <h6 className="text-xl font-bold mb-4">Ruling Planets</h6>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">--</th>
                    <th className="border border-gray-300 px-4 py-2">Sign Lord</th>
                    <th className="border border-gray-300 px-4 py-2">Star Lord</th>
                    <th className="border border-gray-300 px-4 py-2">Sub Lord</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Mo</td>
                    <td className="border border-gray-300 px-4 py-2">Moon</td>
                    <td className="border border-gray-300 px-4 py-2">Mercury</td>
                    <td className="border border-gray-300 px-4 py-2">JUPITER</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Asc</td>
                    <td className="border border-gray-300 px-4 py-2">Sun</td>
                    <td className="border border-gray-300 px-4 py-2">Venus</td>
                    <td className="border border-gray-300 px-4 py-2">Mars</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2" colSpan="2"><b>Day Lord</b></td>
                    <td className="border border-gray-300 px-4 py-2" colSpan="2">Mars</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Planets */}
        <div className="w-full px-4 mb-6">
          <div className="bg-white p-6 shadow-md rounded">
            <h6 className="text-xl font-bold mb-4">Planets</h6>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">Planets</th>
                    <th className="border border-gray-300 px-4 py-2">Cusp</th>
                    <th className="border border-gray-300 px-4 py-2">Sign</th>
                    <th className="border border-gray-300 px-4 py-2">Sign Lord</th>
                    <th className="border border-gray-300 px-4 py-2">Star Lord</th>
                    <th className="border border-gray-300 px-4 py-2">Sub Lord</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Sun</td>
                    <td className="border border-gray-300 px-4 py-2">8</td>
                    <td className="border border-gray-300 px-4 py-2">Sagittarius</td>
                    <td className="border border-gray-300 px-4 py-2">Ju</td>
                    <td className="border border-gray-300 px-4 py-2">Ve</td>
                    <td className="border border-gray-300 px-4 py-2">Mo</td>
                  </tr>
                  {/* Additional rows for other planets */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Moon</td>
                    <td className="border border-gray-300 px-4 py-2">10</td>
                    <td className="border border-gray-300 px-4 py-2">Aquarius</td>
                    <td className="border border-gray-300 px-4 py-2">Sa</td>
                    <td className="border border-gray-300 px-4 py-2">Ra</td>
                    <td className="border border-gray-300 px-4 py-2">Ra</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Mars</td>
                    <td className="border border-gray-300 px-4 py-2">6</td>
                    <td className="border border-gray-300 px-4 py-2">Scorpio</td>
                    <td className="border border-gray-300 px-4 py-2">Ma</td>
                    <td className="border border-gray-300 px-4 py-2">Sa</td>
                    <td className="border border-gray-300 px-4 py-2">Ju</td>
                  </tr>
                  {/* Additional rows for other planets */}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cusps */}
        <div className="w-full px-4 mb-6">
          <div className="bg-white p-6 shadow-md rounded">
            <h6 className="text-xl font-bold mb-4">Cusps</h6>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">Cusp</th>
                    <th className="border border-gray-300 px-4 py-2">Degree</th>
                    <th className="border border-gray-300 px-4 py-2">Sign</th>
                    <th className="border border-gray-300 px-4 py-2">Sign Lord</th>
                    <th className="border border-gray-300 px-4 py-2">Star Lord</th>
                    <th className="border border-gray-300 px-4 py-2">Sub Lord</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">46.67</td>
                    <td className="border border-gray-300 px-4 py-2">Taurus</td>
                    <td className="border border-gray-300 px-4 py-2">Ve</td>
                    <td className="border border-gray-300 px-4 py-2">Mo</td>
                    <td className="border border-gray-300 px-4 py-2">Sa</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">70.98</td>
                    <td className="border border-gray-300 px-4 py-2">Gemini</td>
                    <td className="border border-gray-300 px-4 py-2">Me</td>
                    <td className="border border-gray-300 px-4 py-2">Ra</td>
                    <td className="border border-gray-300 px-4 py-2">Sa</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">94.16</td>
                    <td className="border border-gray-300 px-4 py-2">Cancer</td>
                    <td className="border border-gray-300 px-4 py-2">Mo</td>
                    <td className="border border-gray-300 px-4 py-2">Sa</td>
                    <td className="border border-gray-300 px-4 py-2">Sa</td>
                  </tr>
                  {/* Additional rows for other cusps */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kp;
