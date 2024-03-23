import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { RootState } from '@/store/store';

import axios from 'axios';
import { Container, Row, Col, Button, Card, Table, ListGroup } from 'react-bootstrap';
import notify from '@/helpers/notify';
import Link from 'next/link';
import Layout from '@/components/layouts/Layout';


const PaymentStatus: React.FC = () => {

  const authUserData = useSelector((state: RootState) => state.authUser.data);
  const memoizedAuthUserData = useMemo(() => authUserData, [authUserData]);
  const [statusUpdated, setStatusUpdated] = useState<boolean>(false);
  const dispatch = useDispatch();
//   const fetchRetailerBalance = useCallback(async (branchid: string) => {
//     try {
//       await getRetailerBalanceInfo(branchid).then((response) => {
//         if (response && response.isSuccess && response.statusCode == 200) {
//           sessionStorage.setItem('userinfo', JSON.stringify(response.data));
//           dispatch(fetchAuthUser() as unknown as AnyAction);
//         }
//       })
//       .catch((error) => {
//         if (error.response) {
//           notify.error(error.response.data.error);
//         } else {
//           notify.error('An error occurred. Please try again later.');
//         }
//       });
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
//       notify.error(errorMessage);
//     }
//   }, []);

//   useEffect(() => {
//     async function fetchPaytmStatus() {
//       const orders = await sessionStorage.getItem('orderId')
//       const orderId = (orders && orders != undefined) ? JSON.parse(orders) : ''
      
//       await onlineSaleBasedOrderID({ paymentOrderId: orderId }).then(async (response) => {
//         if (response && response.isSuccess && response.statusCode == 200 && response.data) {
//           setRequestData(response.data);
//           if (Array.isArray(response.data) && response.data.length >= 1) {
//             let gstSum = 0;
//             let tdsSum = 0;
//             let discountSum = 0;
//             let invoiceAmountSum = 0;
//             let totalAmount = 0;
//             response.data.forEach((item:any) => {
//               gstSum += item.gst_amt;
//               tdsSum += item.tds_amt;
//               discountSum += item.DiscountAmt;
//               invoiceAmountSum += parseFloat(item.PlanPrice);
//               totalAmount += parseFloat(item.InvoiceAmount);
//             });
//             setPaymentData({
//               payAmount: invoiceAmountSum.toFixed(2),
//               tdsAmount: tdsSum.toFixed(2),
//               gstAmount: gstSum.toFixed(2),
//               discountAmount: discountSum.toFixed(2),
//               totalAmount: totalAmount.toString(),
//             }
//             )
//           }
//           sessionStorage.removeItem('carts');
//         }
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//     }
//     fetchPaytmStatus();
//     if (authUserData && authUserData.userid) {
//       fetchRetailerBalance(authUserData.userid);
//     }
//   }, []);

  function handlePrint() {
    window.print();
  }

  return (
    <Layout>
      <div className='justify-content-center'>
        <Row className="m-2">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="panel-heading-light bg-default">
              <h3 className="h5">Payment Receipt</h3>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className='mt-2'>
            <div className="d-flex font-weight-bold">
              <p className="h6">Dear Valued Customer</p>
            </div>
            <div className="d-flex font-weight-bold">
              <p className="h6">We have received a payment acknowledgment for an online transaction</p>
            </div>
          </Col>
        </Row>
        {/* <Row className="m-2">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="d-flex font-weight-bold">
              {
                (requesrData && requesrData[0] && requesrData[0].STATUS === "TXN_SUCCESS" || requesrData && requesrData[0] && requesrData[0].TranStatus === "TXN_SUCCESS") ?
                  <p className="h6 text-success">Your payment transaction is successfully completed.</p> :
                  <p className="h6 text-danger">There was an error processing your transaction.</p>
              }
            </div>
          </Col>
        </Row> */}
        <Row className="m-2">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="panel-heading-theme">
              <h3 className="h5">Online Transaction</h3>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div >
              {/* <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th scope="col">Transaction ID</th>
                    <td scope="col">{requesrData && requesrData[0] && requesrData[0].TXNID}</td>
                    <th scope="col">Status</th>
                    <td scope="col">{(requesrData && requesrData[0] && requesrData[0].STATUS) ? requesrData && requesrData[0] && requesrData[0].STATUS : requesrData && requesrData[0] && requesrData[0].TranStatus}</td>
                  </tr>
                  <tr>
                    <th scope="col">Transaction Amount</th>
                    <td scope="col">{requesrData && requesrData[0] && (requesrData[0].TXNAMOUNT) ? requesrData[0].TXNAMOUNT : requesrData && requesrData[0] && requesrData[0].TotalAmountpay }</td>
                    <th scope="col">Transaction Date</th>
                    <td scope="col">{requesrData && requesrData[0] && requesrData[0].TXNDATE}</td>
                  </tr>
                  <tr>
                    <th scope="col">Order ID</th>
                    <td scope="col">{requesrData && requesrData[0] && requesrData[0].ORDERID}</td>
                    <th scope="col">Bank Transaction ID</th>
                    <td scope="col">{requesrData && requesrData[0] && requesrData[0].BANKTXNID}</td>
                  </tr>
                  <tr>
                    <th colSpan={3} scope="col">Payment Mode</th>
                    <td scope="col">{requesrData && requesrData[0] && requesrData[0].PAYMENTMODE}</td>
                  </tr>
                </tbody>
              </Table> */}
            </div>
          </Col>
        </Row>
        {/* {
          (requesrData && requesrData[0] && requesrData[0].amountPayAccount && requesrData[0].amountPayAccount >= 1) ? <Row className="m-2">
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="panel-heading-theme">
                <h3 className="h5">Prepaid Account</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div >
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <th scope="col">Transaction ID</th>
                      <td scope="col">{paytmResp?.TXNID}</td>
                      <th scope="col">Status</th>
                      <td scope="col">{paytmResp?.STATUS ? paytmResp.STATUS : requesrData[0].TranStatus }</td>
                    </tr>
                    <tr>
                      <th scope="col">Transaction Amount</th>
                      <td scope="col">{requesrData[0].useableAmountAccount}</td>
                      <th scope="col">Date Time</th>
                      <td scope="col">{paytmResp?.TXNDATE}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
            : null
        } */}
        <Row className="m-2">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="panel-heading-theme">
              <h3 className="h5">Product Info</h3>
            </div>
          </Col>
          {/* <Col xs={12} sm={12} md={12} lg={12}>
            <div >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="border-0" scope="col">Service Plan</th>
                    <th className="border-0" scope="col">Product</th>
                    <th className="border-0" scope="col">Make</th>
                    <th className="border-0" scope="col">Price</th>
                    <th className="border-0" scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {requesrData && Array.isArray(requesrData) && requesrData.map((item: newCustomerDataInterface, index) => {
                    return (<tr key={`item-${index}`}>
                      <td scope="col">{item.PlanType}</td>
                      <td scope="col">{item.productName}</td>
                      <td scope="col">{item.brand}</td>
                      <td scope="col">{item.ActualProductPrice}</td>
                      <td scope="col">{item.PlanPrice}</td>
                    </tr>)
                  })}
                </tbody>
              </Table>
            </div>
          </Col> */}
          <Col xs={12} sm={12} md={6} lg={6}></Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div >
              {/* <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th scope="col">Subtotal</th>
                    <td scope="col">{paymentData?.payAmount}</td>
                  </tr>
                  <tr>
                    <th scope="col">GST</th>
                    <td scope="col">{paymentData?.gstAmount}</td>
                  </tr>
                  <tr>
                    <th scope="col">TDS</th>
                    <td scope="col">{paymentData?.tdsAmount}</td>
                  </tr>
                  <tr>
                    <th scope="col">Discount</th>
                    <td scope="col">{paymentData?.discountAmount}</td>
                  </tr>
                  <tr>
                    <th scope="col">Total</th>
                    <th scope="col">{paymentData?.totalAmount}</th>
                  </tr>
                </tbody>
              </Table> */}
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
            <Link href="/purchase"><Button className="bg-theme float-end">Exit</Button></Link>
            {/* <Button className="bg-theme float-end" onClick={handlePrint}>Print</Button> */}
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

// export const getServerSideProps =  getAuthServerSideProps; 
export default PaymentStatus;
