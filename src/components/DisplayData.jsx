import React from 'react';
import { useLocation } from 'react-router-dom';
import './DisplayData.css';

const FilteredDataPage = () => {
  const location = useLocation();
  const { filteredData } = location.state || {}; // Retrieve the filtered data from the state

  return (
    <main className="mains">
      <h1 className="title">Filtered Data</h1>

      {/* Display Filtered Data */}
      {filteredData && filteredData.length > 0 ? (
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                {/* Table headers defining the columns */}
                <th>REG NO</th>
                <th>Name</th>
                <th>Purpose</th>
                <th>College</th>
              </tr>
            </thead>
            <tbody>
              {/* Iterating over filteredData to display rows */}
              {filteredData.map((item, index) => (
                <tr key={index}>
                  {/* Display Name with heading first */}
                  <td data-label="REG NO">{item.REG.NO}</td>
                  <td data-label="Name">{item.NAME}</td>
                  <td data-label="Purpose">{item.PURPOSE}</td>
                  <td data-label="College">{item.COLLEGE}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data found</p> // If no data is available
      )}
    </main>
  );
};

export default FilteredDataPage;
