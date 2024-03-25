//pages->payment.js

import React from 'react'
import MakePaymentComponent from '../../components/MakePaymentComponent'
import Layout from '@/components/layouts/Layout'

const payment = () => {

  return (
    <Layout>
        <h4>Payment page</h4>
        <MakePaymentComponent/>

    </Layout>
      
    
  )
}

export default payment



// // pages/checkout.js

// import Layout from '@/components/layouts/Layout';
// import React, { useState } from 'react';

// const Checkout = () => {
//   const [orderId, setOrderId] = useState('');

//   const createOrder = async () => {
//     // Fetch orderId from your server
//     const response = await fetch('/api/createOrder', {
//       method: 'POST',
//       // You can pass any required data to your server here
//     });
//     const data = await response.json();
//     setOrderId(data.orderId);
//   };

//   const handlePayment = async () => {
//     if (window.Razorpay) {
//       const options = {
//         key: 'rzp_test_DdOEL88ENDvhEQ',
//         amount: 1000, // Example amount
//         currency: 'INR',
//         name: 'Your Company Name',
//         description: 'Purchase Description',
//         image: '/your_logo.png',
//         order_id: orderId,
//         handler: function (response) {
//           // Handle successful payment
//           console.log('Payment successful:', response);
//         },
//         prefill: {
//           name: 'Customer Name',
//           email: 'customer@example.com',
//           contact: '1234567890',
//         },
//         modal: {
//           ondismiss: function() {
//             console.log('Payment popup closed');
//           }
//         }
//       };
//       const razorpay = new window.Razorpay(options);
//       razorpay.on('payment.failed', function (response) {
//         console.error('Payment failed:', response.error.code, response.error.description);
//       });
//       razorpay.open();
//     } else {
//       console.error('Razorpay SDK not loaded');
//     }
//   };
  

//   return (
//     <Layout>
//       <h1>Checkout Page</h1>
//       <button onClick={createOrder}>Create Order</button>
//       {orderId && <button onClick={handlePayment}>Pay Now</button>}
//       </Layout>
//   );
// };

// export default Checkout;

















// // // Import Paytm SDK and other necessary modules
// // import PaytmChecksum from "@/helpers/paytm/PaytmChecksum";
// // import { useRouter } from "next/router";
// // import { useEffect } from "react";

// // // Your component

// // const dotenv = require('dotenv');
// // dotenv.config();
// // const https = require('https');
// // const PaytmPaymentPage = () => {
// //     const router = useRouter();

// //     const handlePaymentInitiation = async () => {
// //         // Function to generate checksum and initiate payment
// //         const orderId = 'Order_' + new Date().getTime();
// //         sessionStorage.setItem('orderId', JSON.stringify(orderId));
// //         const amount = 100; // Amount to be paid
// //         const mid = 'InfinA73791511910258';
// //         const mkey = 'Xv#3x9vZ%cawdcD1';

// //         // Prepare payment payload
// //         const paymentPayload = {
// //             requestType: 'Payment',
// //             mid: mid,
// //             websiteName: 'InfinAWEB',
// //             orderId: orderId,
// //                  callbackUrl: 'https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=' + orderId,
// //             txnAmount: {
// //                 value: 1.00,
// //                 currency: 'INR',
// //             },
// //             userInfo: {
// //                 custId: '250',
// //             },
// //         };

// //         try {
// //             // Generate checksum
// //             const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paymentPayload), mkey);

// //             // Prepare Paytm transaction parameters
// //             const paytmParams = {
// //                 body: paymentPayload,
// //                 head: {
// //                     signature: checksum,
// //                 }
// //             };

// //             // Make API call to initiate transaction
// //             const response = await fetch('PAYTM_TRANSACTION_URL', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify(paytmParams),
// //             });

// //             const responseData = await response.json();
            
// //             // Redirect user to Paytm payment page
// //             window.location.href = responseData.paymentUrl;
// //         } catch (error) {
// //             console.error('Error initiating payment:', error);
// //         }
// //     };

// //     // You can render a loading spinner or message while payment is being initiated
// //     return (
// //         <div>
// //             <button onClick={handlePaymentInitiation}>Initiate Payment</button>
// //         </div>
// //     );
// // };

// // export default PaytmPaymentPage;
