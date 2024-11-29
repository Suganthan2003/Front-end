// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import './MainContent.css';

// const MainContent = () => {
//   const [data, setData] = useState([]); // All data
//   const [mobile, setMobile] = useState(''); // Mobile number input for filter
//   const navigate = useNavigate(); // Navigate hook for redirection

//   // Fetch data from the server when the component mounts
//   useEffect(() => {
//     axios.get('https://barath-wv9h.onrender.com/api/data')
//       .then(response => {
//         setData(response.data); // Store the full data in state
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // Handle the filter form submission
//   const handleFilter = (e) => {
//     e.preventDefault();

//     if (mobile.trim() === "") {
//       alert("Please enter a mobile number to filter");
//       return;
//     }

//     // Filter the data based on mobile number entered
//     const filtered = data.filter(item => {
//       return item.Mobile && item.Mobile.toString().includes(mobile); // Make sure Mobile exists and is compared as a string
//     });

//     if (filtered.length > 0) {
//       // Pass the filtered data to the new page and navigate
//       navigate('/filtered-data', { state: { filteredData: filtered } });
//     } else {
//       alert("No users found with this mobile number");
//     }
//   };

//   return (
//     <main className="main-content">
//       <h1>Welcome to the Page</h1>
//       <p>Enter a mobile number to filter the data:</p>

//       {/* Filter Form */}
//       <form onSubmit={handleFilter} className="input-form">
//         <input
//           type="text"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)} // Update state on input change
//           placeholder="Filter by mobile number"
//         />
//         <button type="submit">Filter</button>
//       </form>
//     </main>
//   );
// };

// export default MainContent;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './MainContent.css';

const MainContent = () => {
  const [regNo, setRegNo] = useState(''); // REG NO input for filter
  const [data, setData] = useState([]); // All data
  const navigate = useNavigate(); // Navigate hook for redirection

  // Fetch all data from the server when the component mounts
  useEffect(() => {
    axios.get('https://barath-wv9h.onrender.com/api/data')
      .then(response => {
        setData(response.data); // Store the full data in state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle the filter form submission
  const handleFilter = (e) => {
    e.preventDefault();

    if (regNo.trim() === "") {
      alert("Please enter a REG NO to filter");
      return;
    }

    // Fetch filtered data based on REG NO
    axios.get(`https://barath-wv9h.onrender.com/api/data?regNo=${regNo}`)
      .then(response => {
        if (response.data.length > 0) {
          // Pass the filtered data to the new page and navigate
          navigate('/filtered-data', { state: { filteredData: response.data } });
        } else {
          alert("No user found with this REG NO");
        }
      })
      .catch(error => {
        console.error('Error fetching filtered data:', error);
      });
  };

  return (
    <main className="main-content">
      <h1>Welcome to the Page</h1>
      <p>Enter a REG NO to View Your data:</p>

      {/* Filter Form */}
      <form onSubmit={handleFilter} className="input-form">
        <input className='input-field'
          type="text"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)} // Update state on input change
          placeholder="REG NO (e.g., RBM063999)"
        />
        <button className='but' type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MainContent;
