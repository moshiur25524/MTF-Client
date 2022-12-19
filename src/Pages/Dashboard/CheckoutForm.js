import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const { _id, price, patient, patientName } = appointment;

    useEffect(() => {
        fetch('http://localhost:8080/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async e => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)

        // Confirm Card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            ` ${clientSecret}`,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        }
        else {
            setCardError('')
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your Payment is Successful')

            // Store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:8080/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data);
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement />

                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !elements || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-700'>{cardError}</p>
            }
            {
                success && <div className='text-green-700'>
                    <p>{success}</p>
                    <p>Your Tranjection Id: <span className='text-orange-700 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;