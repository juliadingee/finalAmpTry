// // components/OtherClimbs.tsx
// import React from 'react';
// import { API } from 'aws-amplify';
// import './OtherClimbs.css';

// const OtherClimbs = () => {
//     const handleClick = async (key: string) => {
//         try {
//             const item = await API.get('yourApiName', `/items/${key}`);
//             console.log(item); // This will log the DynamoDB item in the console
//             // You can set this item to state or display it in the UI
//         } catch (error) {
//             console.error('Error fetching item:', error);
//         }
//     };

//     return (
//         <div className="button-list">
//             <button className="button" onClick={() => handleClick('0001')}>Button 1</button>
//             <button className="button" onClick={() => handleClick('0002')}>Button 2</button>
//             <button className="button" onClick={() => handleClick('0003')}>Button 3</button>
//             <button className="button" onClick={() => handleClick('0004')}>Button 4</button>
//             <button className="button" onClick={() => handleClick('0005')}>Button 5</button>
//         </div>
//     );
// };

// export default OtherClimbs;
