import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle } from 'mdb-react-ui-kit';
import './orders.css';
import ProfileHeader from './ProfileHeader';
import img from './../../assets/lightbox5.jpg'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from 'react-router-dom';

const Orders = () => {
  return (
    <div>
      <ProfileHeader />
       <div className='home-page'>
             <div className='text-heading'>
              <h3>Order History</h3>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Enim inventore sequi quod iste voluptas delectus excepturi 
                adipisci doloribus nesciunt autem! </p>
             </div>
             <div className='card'>
             <div className='cards-details'>
                 <div>
                    <h5>Order Date</h5>
                    <p>12/12/2021</p>
                 </div>
                 <div>   
                     <h5>Order Number </h5>
                     <p>123456789</p>
                 </div>
                 <div>
                   <h5>Total Amount</h5>
                   <p>$123.45</p>
                 </div>  
                 <MDBBtn className='me-1 view-btn'>
                            View Order  
                  </MDBBtn>
            </div> 
            <hr />
           <div className=''>   
              <div className='img-details'>
                 <img src={img} alt="img" />
               <div>
              <div className='heading-img'> 
                   <h4>Healthy 2023 Full Body Checkup</h4> <h4>15500.0 PKR</h4> 
              </div>
              <div className='task-details'><h6> Labs : CITI Lab </h6> <h6><TaskAltIcon/> Paid</h6> </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Enim inventore sequi quod iste voluptas delectus excepturi 
                  adipisci doloribus nesciunt autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Numquam, iure.
                  </p>
              </div>
              </div>
              <div className='status-check'> 
              <h6>Order Status :</h6> <h6><TaskAltIcon className='completed'/> Completed </h6>
              <div><Link to="/products" className='products'>View products</Link> </div>
              </div>
           </div>
        </div>     
       </div>
       <div className="fourth">
          <div className="heading">
            <h2>Frequently Booked Packages</h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader >Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Advance Renal Pakage</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Second Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Third Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          <div className="mb-4"></div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Fourth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Fifth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Sixth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>

          <div className="mb-4"></div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Seventh Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Eighth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Ninth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
</div>

 
  )
}

export default Orders
/*
 <h4>Order Date</h4>
                  <h4>Order Number </h4>
                  <h4>Total Amount</h4>

                   <p>12/12/2021</p>
                  <p>123456789</p>
                  <p>$123.45</p>
*/ 