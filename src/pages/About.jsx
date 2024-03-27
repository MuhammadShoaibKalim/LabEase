import React from 'react';

const About = () => {
  return (
    <div className="container" style={{marginTop:120}}>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <p className="text-center mb-5" style={{ color: "#75dbd0", fontWeight: "bold", fontSize: 22 }}>
            INTRODUCING
          </p>
          <h4 className="text-center mb-5" style={{fontFamily:"cursive",fontSize:28,fontWeight:"bold"}}> LabEase Redefining HealthCare Access</h4>
          <p className="text-center">
            LabEase is a comprehensive web-based platform designed to streamline access to laboratory services for patients. It simplifies the process of finding, comparing, and scheduling lab tests. The platform centralizes information on tests, prices, appointments, and results, making it easier for users to make informed healthcare decisions. With modules like test information, appointment scheduling, result display, and user feedback, LabEase aims to enhance the patient experience, save time, and improve the overall efficiency of healthcare services.
          </p>
          <ul>
            <li>Centralize Information: Provide a single platform where patients can access comprehensive information about various lab tests, including prices, descriptions, and instructions.</li>
            <li>Facilitate Comparison: Enable users to compare prices among different laboratories and make informed decisions regarding their healthcare needs.</li>
            <li>Streamline Appointments: Offer an easy-to-use appointment module, allowing patients to schedule tests hassle-free.</li>
            <li>Efficient Result Delivery: Display test results directly on the platform once processed, ensuring timely access for patients.</li>
            <li>Enhance User Experience: Implement modules for user feedback, testimonials, and notifications to continuously improve the system and build trust among users.</li>
            <li>Streamline Appointments: Offer an easy-to-use appointment module, allowing patients to schedule tests hassle-free.</li>
            <li>Efficient Result Delivery: Display test results directly on the platform once processed, ensuring timely access for patients.</li>
            <li>Enhance User Experience: Implement modules for user feedback, testimonials, and notifications to continuously improve the system and build trust among users.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;