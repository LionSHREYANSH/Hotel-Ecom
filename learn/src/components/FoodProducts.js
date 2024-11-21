// import React, { useContext, useEffect, useState } from 'react'
// // import React from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';


// const FoodProducts = () => {

//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);


//   useEffect(()=>{

//       fetch("/api/usershowlist")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           if (data.status === 200) {
//             setProduct(data.apiData);
//           } else {
//             setMessage(data.message);
//           }
//         })
//   },[])

//   const { cart, setCart } = useContext(contextapi);

//   function handlecart(e, productid) {
//     console.log(productid);

//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart);
//     console.log(_cart);
//   }


//   return (
//  <>


// <MDBContainer>
// <MDBRow>
// {product.map((product, key) => (
// <MDBCol size='md-4 mt-3'>
// <MDBCard id="productimage" >
//       <MDBCardImage  src={`upload/${product.PImg}`}  style={{ height: "20rem" }}  position='top' alt='...' />
//       <MDBCardBody>
//         <MDBCardTitle>{product.PName}</MDBCardTitle>
//         <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//         <MDBCardText>
//          {product.PDesc}
//         </MDBCardText>
//         <MDBBtn href='#' onClick={(e) => { handlecart(e, product._id) }}>Add To Cart</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
// </MDBCol>
//      ))}
// </MDBRow>
// </MDBContainer>
//  </>
//   )
// }

// export default FoodProducts

//----------------------------------------------------------------------------------


// import React, { useContext, useEffect, useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';

// const FoodProducts = () => {
//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);
//   const [showLoginAlert, setShowLoginAlert] = useState(false); // State for login prompt

//   const { cart, setCart, user } = useContext(contextapi); // Assuming 'user' context indicates login status

//   useEffect(() => {
//     fetch("/api/usershowlist")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.status === 200) {
//           setProduct(data.apiData);
//         } else {
//           setMessage(data.message);
//         }
//       });
//   }, []);

//   function handlecart(e, productid) {
//     // Check if the user is logged in before adding the product to the cart
//     if (!user) {
//       // If the user is not logged in, show the login alert
//       setShowLoginAlert(true);
//       return;
//     }

//     console.log(productid);

//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart);
//     console.log(_cart);
//   }

//   return (
//     <>
//       {showLoginAlert && (
//         <div className="alert alert-warning" role="alert">
//           You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
//           <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
//         </div>
//       )}
//       <MDBContainer>
//         <MDBRow>
//           {product.map((product, key) => (
//             <MDBCol size='md-4 mt-3' key={key}>
//               <MDBCard id="productimage">
//                 <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position='top' alt='...' />
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.PName}</MDBCardTitle>
//                   <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//                   <MDBCardText>
//                     {product.PDesc}
//                   </MDBCardText>
//                   <MDBBtn href='#' onClick={(e) => { handlecart(e, product._id) }}>Add To Cart</MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default FoodProducts;


//--------------------------------------------------------------------------------------------------------

// import React, { useContext, useEffect, useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';

// const FoodProducts = () => {
//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);
//   const [showLoginAlert, setShowLoginAlert] = useState(false); // State for login prompt

//   const { cart, setCart, user, setUser } = useContext(contextapi); // Assuming 'user' context indicates login status

//   useEffect(() => {
//     // Fetch the product list
//     fetch("/api/usershowlist")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.status === 200) {
//           setProduct(data.apiData);
//         } else {
//           setMessage(data.message);
//         }
//       });
//   }, []);

//   // Handle adding the product to the cart
//   function handlecart(e, productid) {
//     // Check if the user is logged in before adding the product to the cart
//     if (!user) {
//       // If the user is not logged in, show the login alert
//       setShowLoginAlert(true);
//       return;
//     }

//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart); // Update the cart context
//     console.log(_cart);
//   }

//   // Example of a login handler (you should replace this with your actual login function)
//   const handleLogin = (userInfo) => {
//     // Simulate login and update the user context
//     setUser(userInfo); // Assume userInfo contains user data after successful login
//     setShowLoginAlert(false); // Close the login alert
//   };

//   return (
//     <>
//       {showLoginAlert && (
//         <div className="alert alert-warning" role="alert">
//           You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
//           <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
//         </div>
//       )}

//       <MDBContainer>
//         <MDBRow>
//           {product.map((product, key) => (
//             <MDBCol size='md-4 mt-3' key={key}>
//               <MDBCard id="productimage">
//                 <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position='top' alt='...' />
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.PName}</MDBCardTitle>
//                   <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//                   <MDBCardText>
//                     {product.PDesc}
//                   </MDBCardText>
//                   <MDBBtn href='#' onClick={(e) => handlecart(e, product._id)}>Add To Cart</MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default FoodProducts;

//------------------------------------------------------------------------------------------


import React, { useContext, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { contextapi } from '../Contextapi';

const FoodProducts = () => {
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState([]);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [inputtext, setInputtext] = useState("");  // State for login prompt

  const { cart, setCart, loginname, setUser } = useContext(contextapi); // Assuming 'user' context indicates login status
console.log(loginname)
  useEffect(() => {
    // Fetch the product list
    fetch("/api/usershowlist")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setProduct(data.apiData);
        } else {
          setMessage(data.message);
        }
      });
  }, []);

  // Handle adding the product to the cart
  function handlecart(e, productid) {
    
    // Check if the user is logged in before adding the product to the cart
    if (!loginname) {
      // If the user is not logged in, show the login alert
      setShowLoginAlert(true);
      return;
    }

    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }

    if (!_cart.items[productid]) {
      _cart.items[productid] = 1;
    } else {
      _cart.items[productid] += 1;
    }

    if (!_cart.totalitems) {
      _cart.totalitems = 1;
    } else {
      _cart.totalitems += 1;
    }

    setCart(_cart); // Update the cart context
    console.log(_cart);
    localStorage.setItem("cart",JSON.stringify(_cart));
  }

  // Example of a registration handler (you should replace this with your actual registration logic)
  const handleRegistration = (userInfo) => {
    // Simulate registration and update the user context
    setUser(userInfo); // Assume userInfo contains user data after successful registration
    setShowLoginAlert(false); // Close the login alert after successful registration
  };

  const inputhandler = (e) => {
    setInputtext(e.target.value.toLowerCase());
  };

  return (
    <>
      {showLoginAlert && (
        <div className="alert alert-warning" role="alert">
          You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
          <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
        </div>
      )}

      <div>

      <MDBContainer>
             <input id="search"
        type="search"
        className="form-control rounded mt-3"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={inputhandler}
        value={inputtext} // Use 'value' instead of 'val'
      />
      </MDBContainer>
      </div>

      <MDBContainer>
        <MDBRow>
          {product
           .filter((el) => el.PName.toLowerCase().includes(inputtext))
          .map((product, key) => (
            <MDBCol size='md-4 mt-3' key={key}>
              <MDBCard id="productimage">
                <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{product.PName}</MDBCardTitle>
                  <MDBCardTitle>{product.PPrice}</MDBCardTitle>
                  <MDBCardText>
                    {product.PDesc}
                  </MDBCardText>
                  <MDBBtn href='#' onClick={(e) => handlecart(e, product._id)}>Add To Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default FoodProducts;


//---------------------------------------------------------------------------------------

// import React, { useContext, useEffect, useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';

// const FoodProducts = () => {
//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);
//   const [showLoginAlert, setShowLoginAlert] = useState(); // State for login prompt

//   const { cart, setCart, user, setUser } = useContext(contextapi); // Assuming 'user' context indicates login status

//   useEffect(() => {
//     // Fetch the product list from your API or database
//     fetch("/api/usershowlist")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.status === 200) {
//           setProduct(data.apiData);
//         } else {
//           setMessage(data.message);
//         }
//       });
//   }, []);

//   //Handle adding the product to the cart
//   function handlecart(e, productid) {
//     // Check if the user is logged in before adding the product to the cart
//     if (!user) {
//       // If the user is not logged in, show the login alert
//       setShowLoginAlert("please logged in ");
//       return;
//     }else{
//       console.log("hello")
//     }

//     // If the user is logged in, add the product to the cart
//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart); // Update the cart context
//     console.log(_cart);
//   }

//   // Example of a registration handler (you should replace this with your actual registration logic)
//   const handleRegistration = (userInfo) => {
//     // Simulate registration and update the user context
//     setUser(userInfo); // Assume userInfo contains user data after successful registration
//     setShowLoginAlert(false); // Close the login alert after successful registration
//   };

//   return (
//     <>
//       {/* If the user is not logged in, show the alert */}
//       {showLoginAlert && (
//         <div className="alert alert-warning" role="alert">
//           You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
//           <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
//         </div>
//       )}

//       <MDBContainer>
//         <MDBRow>
//           {product.map((product, key) => (
//             <MDBCol size='md-4 mt-3' key={key}>
//               <MDBCard id="productimage">
//                 <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position='top' alt='...' />
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.PName}</MDBCardTitle>
//                   <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//                   <MDBCardText>{product.PDesc}</MDBCardText>
//                   {/* <MDBBtn
//                     href='#'
//                     onClick={(e) => handlecart(e, product._id)}
//                     disabled={!user} // Disable the button if the user is not logged in
//                   >
//                     Add To Cart
//                   </MDBBtn> */}

// <MDBBtn
//   href="#"
//   onClick={(e) => handlecart(e, product._id)}
//   disabled={!user} // Disable the button if the user is not logged in
// >
//   {user ? 'Add To Cart' : 'Log in to Add'} {/* Dynamic text based on login state */}
// </MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default FoodProducts;


//-----------------------------------------------------------------------------------------



// import React, { useContext, useEffect, useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';

// const FoodProducts = () => {
//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);
//   const [showLoginAlert, setShowLoginAlert] = useState(false); // State for login prompt

//   const { cart, setCart, user, setUser } = useContext(contextapi); // Assuming 'user' context indicates login status

//   useEffect(() => {
//     // Fetch the product list
//     fetch("/api/usershowlist")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 200) {
//           setProduct(data.apiData);
//         } else {
//           setMessage(data.message);
//         }
//       });
//   }, []);

//   // Handle adding the product to the cart
//   function handlecart(e, productid) {
//     // Check if the user is logged in before adding the product to the cart
//     if (!user) {
//       // If the user is not logged in, show the login alert
//       setShowLoginAlert(true);
//       return;
//     }

//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart); // Update the cart context
//   }

//   // Function to get button properties based on user login status
//   function getAddToCartButtonProps() {
//     if (!user) {
//       return {
//         disabled: true,
//         buttonText: "Log in to Add", // Text when user is not logged in
//       };
//     }
//     return {
//       disabled: false,
//       buttonText: "Add To Cart", // Text when user is logged in
//     };
//   }

//   return (
//     <>
//       {showLoginAlert && (
//         <div className="alert alert-warning" role="alert">
//           You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
//           <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
//         </div>
//       )}

//       <MDBContainer>
//         <MDBRow>
//           {product.map((product, key) => (
//             <MDBCol size="md-4 mt-3" key={key}>
//               <MDBCard id="productimage">
//                 <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position="top" alt="..." />
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.PName}</MDBCardTitle>
//                   <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//                   <MDBCardText>{product.PDesc}</MDBCardText>

//                   {/* Use the helper function to get button properties */}
//                   <MDBBtn
//                     href="#"
//                     onClick={(e) => handlecart(e, product._id)}
//                     disabled={getAddToCartButtonProps().disabled} // Dynamic disabled state
//                   >
//                     {getAddToCartButtonProps().buttonText} {/* Dynamic button text */}
//                   </MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default FoodProducts;
