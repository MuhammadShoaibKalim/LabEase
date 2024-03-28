import react from 'react'
import "./labTest.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const LabTest = () => {
  return (
    <div>
    <Header/>
    <div className='test-div-1'>
      <h2>Lab Test</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Aspernatur iusto possimus eveniet illum, dignissimos incidunt, porro voluptatum est unde explicabo, 
        nulla exercitationem in? Possimus dolorum quisquam, repellendus praesentium laborum sequi?
      </p>
      <h2>Lab Test Addtion</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum alias,
         ullam dolores obcaecati nisi voluptatem magni excepturi laudantium pariatur.
      </p>
    
    </div>
    <Footer/>
    </div>
  )
}

export default LabTest
