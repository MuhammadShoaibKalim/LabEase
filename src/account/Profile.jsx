import react from 'react';
import { 
         MDBCol, 
        MDBContainer, 
        MDBRow, 
        MDBCard, 
        MDBBtn,
        MDBCardText, MDBCardBody, MDBCardImage, MDBTypography,  } from 'mdb-react-ui-kit';
import ".\\profile.css";
import { Link } from 'react-router-dom';
import profileImage from './../assets/lightbox5.jpg';

const Profile = () => {
  return (
    <section className="profile-section vh-100 main" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white "
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', width:"130px" }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '100px' }} fluid />
                  <MDBTypography tag="h5">Admin</MDBTypography>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h4">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="12" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">admin@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="12" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted" >+92300-1234567</MDBCardText>
                      </MDBCol>
                      <hr className="mt-0 mb-4" />
                    </MDBRow>

                    <div className="d-flex justify-content-start mb-1 ">
                      
                           <Link to="/labadmin" ><MDBBtn  className="me-3" style={{ backgroundColor: '#75DBD0', padding:"8px" }}>Lab admin</MDBBtn></Link>
                           <Link to="/orders" > <MDBBtn  className="me-3" style={{ backgroundColor: '#75DBD0', padding:"8px" }}>Orders</MDBBtn> </Link>
                           <Link to="/logout" > <MDBBtn style={{ backgroundColor: '#75DBD0', padding:"8px" }}>Log out</MDBBtn>  </Link>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Profile;
