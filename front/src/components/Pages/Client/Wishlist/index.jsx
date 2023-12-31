import { Rating } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import "./index.css"

const Wishlist = ({ cartWis, removeFromWis, addToCart }) => {


    const [CART, setCART] = useState([])


    // const removeFromWish = (ca) => {
    //     setCART(CART.filter((product) => product !== ca))
    // }

    useEffect(() => {
        setCART(cartWis)
    }, [cartWis])

    return (
        <div className='wishlist-container'>
            <div className='wishlist-parent'>
                <div className='wishlist-card'>
                    
                    <h1>Wish List</h1>
                    {
                        CART.map((caWi, caIndex) => (
                            <div className='wishlist-card-child' style={{ display: 'flex', alignItems: 'center', width: '90%', marginBottom: '32px' }}>
                                <img src={caWi.img} style={{ width: '100px', marginRight: '50px' }} alt="" />

                                <div className='wishlist-rating' style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                                    <div className='wishlist-rating-parent' style={{ width: '400px' }}>
                                        <p>{caWi.name}</p>
                                        <Box
                                            sx={{
                                                '& > legend': { mt: 5 },
                                            }}
                                        >
                                            <Rating name="read-only" value={caWi.rating} readOnly />
                                        </Box>
                                    </div>

                                    <div className='wishlist-availability' style={{ backgroundColor: '#28a745', color: 'white', fontSize: '14px', padding: '1px 2px', borderRadius: '2px' }}>
                                        {caWi.availability}
                                    </div>


                                    <div className='wishlist-add' style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                        <p style={{ marginRight: '20px' }}>${caWi.discount ? caWi.discount : caWi.price}.00</p>

                                        {/* <p>{ca.price * ca.quantity}</p> */}


                                        <button style={{ padding: '5px 10px', height: '30px', backgroundColor: "#ffd333", border: 0, cursor: 'pointer' }} className='remove-icon' onClick={() => removeFromWis(caWi)}>Remove</button>
                                        <button style={{ padding: '5px 10px', height: '30px', backgroundColor: "#ffd333", border: 0, cursor: 'pointer' }} className='remove-icon' onClick={() => addToCart(caWi)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wishlist

// import React from 'react'

// const index = () => {
//   return (
//     <div>
//       lskdkdkd
//     </div>
//   )
// }

// export default index
