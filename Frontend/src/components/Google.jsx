// import React, { useState, useEffect } from 'react';
// import * as Icon from "react-bootstrap-icons";
// const SearchComponent: React.FC = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   // Initialize Google Search Engine script
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://cse.google.com/cse.js?cx=56c337490264341e4"; // Replace with your custom search engine ID
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);
//   // Handle search results
//   useEffect(() => {
//     if (!window.cse) return;
//     window.cse.element.addListener({
//       type: 'resultClick',
//       fn: (event: cse.element.ResultClickEvent) => {
//         const result = event.result; // Extract the actual result object
//         setSearchResults([result]); // Update search results state with the single result
//       },
//     });
//   }, [searchResults]);
//   return (
//     <div>
//       <center>
//         <div className="test11 input-group w-50">
//           {/* Google Search Engine element */}
//           <div className="gcse-search"></div>
//         </div>
//         {searchResults.length > 0 && (
//           <ul className="list-group">
//             {searchResults.map((result) => (
//               <li className="list-group-item" key={result.url}>
//                 {/* Display search result information */}
//                 <a href={result.url} target="_blank">{result.title}</a>
//                 <br />
//                 <span>{result.snippet}</span> - {result.content_type}
//               </li>
//             ))}
//           </ul>
//         )}
//       </center>
//     </div>
//   );
// };
// export default SearchComponent;