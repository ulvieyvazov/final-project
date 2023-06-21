import { Rating } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

const Wishlist = ({ cartWi }) => {


    const [wish, setWish] = useState([])

    console.log(wish.img);

    const removeFromWish = (ca) => {
        setWish(wish.filter((product) => product !== ca))
    }

    useEffect(() => {
        setWish(cartWi)
    }, [cartWi])

    return (
        <div>
            {
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={wish.img} style={{ width: '100px' }} alt="" />
                    <p>{wish.name}</p>
                    <Box
                        sx={{
                            '& > legend': { mt: 5 },
                        }}
                    >
                        <Rating name="read-only" value={wish.rating} readOnly />
                    </Box>

                    <button>add to cart</button>


                    <button className='remove-icon' onClick={() => removeFromWish(wish)}>Remove</button>
                </div>

            }

            <p> Total
                {
                    wish.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
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
