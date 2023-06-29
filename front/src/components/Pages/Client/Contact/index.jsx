import React from 'react'
import "./index.scss"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MessageSchema } from '../../../../ProductSchema/MessageSchema';
import axios from 'axios';

const Contact = () => {


    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(MessageSchema),
    });

    const postProduct = async () => {
        const values = getValues()

        await axios.post("http://localhost:9900/message", {
            name: values.name,
            email: values.email,
            message: values.message,
            subject: values.subject,
        },)

    }

    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <iframe style={{ width: '100%', height: '500px' }} class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Baku&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

            <div className='contact-container'>
                <div className='contact-parent'>
                    <h1>Contact Us</h1>

                    <div className='contact'>
                        <div className='contact-left'>
                            <h2>Our Address</h2>
                            <p>715 Fake Ave, Apt. 34, New York, NY 10021 USA
                                <br /> Email: stroyka@example.com  <br /> Phone Number: +1 754 000-00-00</p>

                            <p>
                                <h4>Opening Hours</h4>
                                <p>Monday to Friday: 8am-8pm <br /> Saturday: 8am-6pm <br /> Sunday: 10am-4pm</p>
                            </p>

                            <p>
                                <h4>Comment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </p>
                        </div>

                        <div className='contact-right'>
                            <h2>Leave us a Message</h2>

                            <form action="" onSubmit={handleSubmit(postProduct)}>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div className='contact-input'>
                                        <label htmlFor="">Your Name</label> <br />
                                        <input type="text" placeholder='Your Name' {...register("name")} />
                                        {errors.name?.message && (
                                            <p style={{ color: "red" }}>{errors.name?.message}</p>
                                        )}
                                    </div>
                                    <div className='contact-input'>
                                        <label htmlFor="">Email</label> <br />
                                        <input type="email" placeholder='Email' {...register("email")} />
                                        {errors.email?.message && (
                                            <p style={{ color: "red" }}>{errors.email?.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className='contact-input' style={{ width: '100%', margin: '25px 0' }}>
                                    <label htmlFor="">Subject</label> <br />
                                    <input style={{ width: '95%' }} type="text" placeholder='Subject' {...register("subject")} />
                                    {errors.subject?.message && (
                                        <p style={{ color: "red" }}>{errors.subject?.message}</p>
                                    )}
                                </div>

                                <div className='contact-input' style={{ width: '100%' }}>
                                    <label htmlFor="">Message</label> <br />
                                    <textarea style={{ width: '95%', height: '120px' }} id="subject" name="message" {...register("message")} ></textarea>
                                    {errors.message?.message && (
                                        <p style={{ color: "red" }}>{errors.message?.message}</p>
                                    )}
                                </div>

                                <button type='submit'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
