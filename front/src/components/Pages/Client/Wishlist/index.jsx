import { Rating } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

const Wishlist = ({ cartWis, removeFromWis }) => {


    const [CART, setCART] = useState([])


    // const removeFromWish = (ca) => {
    //     setCART(CART.filter((product) => product !== ca))
    // }

    useEffect(() => {
        setCART(cartWis)
    }, [cartWis])

    return (
        <div>
            {
                CART.map((caWi, caIndex) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={caWi.img} style={{ width: '100px' }} alt="" />
                        <p>{caWi.name}</p>
                        <Box
                            sx={{
                                '& > legend': { mt: 5 },
                            }}
                        >
                            <Rating name="read-only" value={caWi.rating} readOnly />
                        </Box>


                        <p>{caWi.discount ? caWi.discount * caWi.quantity : caWi.price * caWi.quantity}</p>

                        {/* <p>{ca.price * ca.quantity}</p> */}


                        <button className='remove-icon' onClick={() => removeFromWis(caWi)}>Remove</button>
                    </div>
                ))

            }
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
