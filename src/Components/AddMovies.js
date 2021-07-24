// import React, { useState } from 'react'

// import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'



// const AddMovie = ({addFilm}) => {
//     const [show, setShow]=useState(false)
//     const [name, setName]=useState("")
//     const [image, setImage]=useState("")
    
//     const [rate, setRate] = useState(0)

//     const handleClose = () => setShow(false)
//     const handleShow = () => setShow(true)

//     const handleSubmit = (e) => {
//         let newMovie = {
//             name: name,
//             url1: image,
//             id: Math.random(),
//             rating: rate,
            
//         }

//         addFilm(newMovie, e)
//         setName('')
//         setImage('')
//         setRate(0)
//         handleClose()
//     }


//     return (
//         <div>
//             <Button variant="primary" onClick={handleShow} className="btn-add">
//                 Add New Movie 
//             </Button>
            
//                 <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton closeLabel=''>
//                     <Modal.Title>Add Your Movie</Modal.Title>
//                 </Modal.Header>

//                 <Modal.Body className="add-movie-modal">
//                     <span>Movie's Name:</span>
//                     <input type="text" placeholder="Enter Movie's name" value={name} onChange={(e)=>setName(e.target.value)}/>
//                     <span>posterURL:</span>
//                     <input type="text" placeholder="Enter Movie's picture link" value={image} onChange={(e)=>setImage(e.target.value)}/>
                   
                    
                    
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>Cancel</Button>
//                     <Button variant="primary" onClick={handleSubmit}>Add</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }

// export default AddMovie

import React , {useState} from 'react'
import Modal   from 'react-bootstrap/Modal'
import {Button}   from 'react-bootstrap' 
import Form from 'react-bootstrap/Form'
import Rating from "./Rating"
export default function AddMovie({addMv}) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [rate, setRate] = useState(0);
 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) =>{
      let newmovie ={
        name : name ,
        image : image,
        rate : rate ,
        id: Math.random(),
       
      }

  addMv(e,newmovie) ;
  setShow(false);
  setName('');
  setImage('');
  setRate('');

    }
  
    return (
        <div>
          
      <Button variant="primary" onClick={handleShow}>
        Add your new movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Here to add you movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group >
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" placeholder="name input" value={name}
            name="name"
            required
            onChange={(e) => setName(e.target.value)}/>    
              <Form.Label>URL: </Form.Label>
              <Form.Control type="text" placeholder="URL image input"  value={image}
              onChange={(e)=> setImage(e.target.value) }/>
              <Form.Label>Movie Rate: </Form.Label>
              <Rating rate={rate} setRate={setRate} />
               
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
        </div>
    )
}

