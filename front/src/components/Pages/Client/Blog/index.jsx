import React from 'react'
import "./index.scss"
import post1 from "../../../../assets/post-1.jpg"
import post2 from "../../../../assets/post-2.jpg"
import post3 from "../../../../assets/post-3.jpg"
import post4 from "../../../../assets/post-4.jpg"
import post5 from "../../../../assets/post-5.jpg"
import post6 from "../../../../assets/post-6.jpg"
import post7 from "../../../../assets/post-7.jpg"
import post8 from "../../../../assets/post-8.jpg"
import post9 from "../../../../assets/post-9.jpg"
import post10 from "../../../../assets/post-10.jpg"



const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-parent'>

                <h1>Latest News</h1>

                <div className='blog-left'>
                    <div className='post-left1'>
                        <img src={post1} alt="" />

                        <div className='post-left1-text'>
                            <span>Special Offers</span>
                            <span>October 19, 2019</span>

                            <h3>Philosophy That Addresses Topics Such As Goodness</h3>
                            <p> In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='post-left1'>
                        <img src={post2} alt="" />

                        <div className='post-left1-text'>
                            <span>Latest News</span>
                            <span>September 5, 2019</span>

                            <h3>Logic Is The Study Of Reasoning And Argument Part 2</h3>
                            <p>In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='post-left1'>
                        <img src={post3} alt="" />

                        <div className='post-left1-text'>
                            <span>New Arrivals</span>
                            <span>August 12, 2019</span>

                            <h3>Some Philosophers Specialize In One Or More Historical Periods</h3>
                            <p> In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>


                    <div className='post-left1'>
                        <img src={post4} alt="" />

                        <div className='post-left1-text'>
                            <span>Special Offers</span>
                            <span>Jule 30, 2019</span>

                            <h3>A Variety Of Other Academic And Non-Academic Approaches Have Been Explored</h3>
                            <p> In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='post-left1'>
                        <img src={post5} alt="" />

                        <div className='post-left1-text'>
                            <span>New Arrivals</span>
                            <span>June 12, 2019</span>

                            <h3>Germany Was The First Country To Professionalize Philosophy</h3>
                            <p>In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='post-left1'>
                        <img src={post6} alt="" />

                        <div className='post-left1-text'>
                            <span>Special Offers</span>
                            <span>May 21, 2019</span>

                            <h3>Logic Is The Study Of Reasoning And Argument Part 1</h3>
                            <p> In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>



                    <div className='post-left1'>
                        <img src={post7} alt="" />

                        <div className='post-left1-text'>
                            <span>Special Offers</span>
                            <span>April 3, 2019</span>

                            <h3>Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense</h3>
                            <p> In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='post-left1'>
                        <img src={post8} alt="" />

                        <div className='post-left1-text'>
                            <span>Latest News</span>
                            <span>Mart 29, 2019</span>

                            <h3>An Advantage Of Digital Circuits When Compared To Analog Circuits</h3>
                            <p>In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='post-left1'>
                        <img src={post9} alt="" />

                        <div className='post-left1-text'>
                            <span>New Arrivals</span>
                            <span>February 10, 2019</span>

                            <h3>A Digital Circuit Is Typically Constructed From Small Electronic Circuits</h3>
                            <p> In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='post-left1'>
                        <img src={post10} alt="" />

                        <div className='post-left1-text'>
                            <span>Special Offers</span>
                            <span>January 1, 2019</span>

                            <h3>Engineers Use Many Methods To Minimize Logic Functions</h3>
                            <p> In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... </p>

                            <button>Read More</button>
                        </div>
                    </div>
                </div>

                <div className='blog-right'>

                </div>
            </div>
        </div>
    )
}

export default Blog
