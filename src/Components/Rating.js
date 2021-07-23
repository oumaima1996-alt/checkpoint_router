// import React from 'react'
// // import {FaStar} from 'react-icons/fa'



// // import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'


// const Rating = ({rate, setRate}) => {

//     const array=(x)=>{
        
//         let star=[]
//         for(let i=1; i<=5; i++){

//             if(i<=x){
//                 star.push(
//                     //1st Method
                    
//                     <span style = {{color:"yellow", cursor:"pointer", fontSize:"200%"}} onClick = {() => setRate(i)}>
//                     ★
//                     </span>
                    

                    
//                 )
//             }
//             else{
//                 star.push(
//                     //1st Method
                    
//                     <span style = {{color:"yellow", cursor:"pointer", fontSize:"200%"}} onClick = {() => setRate(i)}>
//                 ☆
//             </span>
                   
//                 )
//             }
//         }
//         return star
//     }
//     return (
//         <div>
//             {array(rate)}
//         </div>
//     )
// }
// Rating.defaultProps={
//     setRate: ()=>{},
//     rate:0
// }

// export default Rating


import React from 'react'

 const  Rating =({setRate , rate}) =>{
    const array = (x)=>{
        let star = [] ;
        for(let i = 1 ; i <= 5 ; i++)
        {
            if (i <= x)
            {
              star.push(
                  
                    <span style={{fontSize:"200% " , color: "yellow" , cursor:"pointer"}}
                    key={i}
                    onClick={()=>setRate(i)}
                    >
                       ★
                        
                        </span>

              )
            }
            else {
                star.push(
                    <span style={{fontSize:"200% "  , color:"yellow" , cursor:"pointer"}}
                    key={i}
                    onClick={()=>setRate(i)}>
                      ☆
                    </span>
                )
            }
        }
        return star
    }

    return (
        <div>
         {array(rate)} 
        </div>
    )
}
Rating.defaultProps ={
    setRate : () =>{} ,
    rate : 0 ,
}
export default Rating ;