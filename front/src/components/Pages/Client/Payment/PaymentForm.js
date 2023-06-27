import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const PaymentForm = () => {


    const onToken = (token) => {
        console.log(token);
    }

    return (
        <div>
            <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51NNYzQE5seW1hwSy9x6NNtxPtWyERyh70FGQag8jjS1z2cA8LSGfqGj46fP4h3EvRCeqnLLla6mX1GItgLX8FNyK00uD3KQMmK"
            />
        </div>
    )
}

export default PaymentForm
