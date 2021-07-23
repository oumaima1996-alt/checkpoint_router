// import React from 'react'
// import {Navbar, Nav,  NavDropdown, Form, Button, FormControl} from "react-bootstrap"
// //import 'bootstrap/dist/css/bootstrap.min.css';
// import Rating from '../Components/Rating.js'

// const NavBar = ({name, setName, setRatingSearch, ratingSearch})=> {
//   console.log("name", name) 
//     return (
//         <div>
//     <Navbar bg="dark" expand="lg">
  
    
//     <Form className="d-flex">
//       <FormControl
//         type="search"
//         placeholder="Search"
//         className="mr-2"
//         aria-label="Search"
//       value = {name} onChange = {(e) =>setName(e.target.value)}/>
//       <Button variant="outline-success">Search</Button>
//       <Rating  rate = {ratingSearch} setRate = {setRatingSearch} />
      
//     </Form>
  
// </Navbar>
  
  

            
//         </div>
//     )
// }

// export default NavBar






import React from 'react'
// import "./navBar.css"
import Rating from "../Components/Rating"
export default function Navbar({setName , setRatingSearch , ratingSearch}) {
    return (
        <div className="navbar">

<span>
  <h1 className="navbar-brand" >Movie App</h1>
  </span> 
  <span style={{display:"flex"}}>
     <input type="text" placeholder="Search" 
     onChange={(e)=>setName(e.target.value)}/>
   <Rating setRate={setRatingSearch} rate={ratingSearch}/>
 </span>
 </div>
    )
}