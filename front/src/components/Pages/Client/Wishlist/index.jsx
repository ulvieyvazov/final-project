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
                    {
                        CART.map((caWi, caIndex) => (
                            <div style={{ display: 'flex', alignItems: 'center', width: '90%', margin: '0 auto' }}>
                                <img src={caWi.img} style={{ width: '100px', marginRight: '50px' }} alt="" />

                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '500px' }}>
                                        <p>{caWi.name}</p>
                                        <Box
                                            sx={{
                                                '& > legend': { mt: 5 },
                                            }}
                                        >
                                            <Rating name="read-only" value={caWi.rating} readOnly />
                                        </Box>
                                    </div>


                                    <div style={{display: 'flex', alignItems: 'center', gap: '3px'}}>
                                        <p style={{marginRight: '20px'}}>${caWi.discount ? caWi.discount : caWi.price}.00</p>

                                        {/* <p>{ca.price * ca.quantity}</p> */}


                                        <button style={{ padding: '5px 10px', height: '30px', backgroundColor: "#ffd333", border: 0, cursor: 'pointer' }} className='remove-icon' onClick={() => removeFromWis(caWi)}>Remove</button>
                                        <button style={{ padding: '5px 10px', height: '30px', backgroundColor: "#ffd333", border: 0, cursor: 'pointer' }} onClick={() => addToCart(caWi)}>add to cart</button>
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
