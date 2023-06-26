import React, { useEffect, useState } from 'react'
import ProductDetail from '../../../ProductDetail'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "./index.css"

const Specification = ({addToCart}) => {

  const params = useParams()
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await axios.get(`http://localhost:5050/products/${params.id}`)
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ProductDetail addToCart={addToCart} />
      <div>
        {
          <div className='specification-container'>
            <div className='specification-parent'>
              <h1>Specification</h1>

              <div className='general'>
                <h2>General</h2>
                {/* <div style={{width: '100%', backgroundColor: 'gray', height: '1px'}}></div> */}
                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Material</p>
                  <div>{data.material ? data.material : "There is no such data in this product"}</div>
                </div>

                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Engine Type</p>
                  <div>{data.engine ? data.engine : "There is no such data in this product"}</div>
                </div>


                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Battery Voltage</p>
                  <div>{data.batteryVolt ? data.batteryVolt : "There is no such data in this product"}</div>
                </div>


                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Battery Type</p>
                  <div>{data.batteryType ? data.batteryType : "There is no such data in this product"}</div>
                </div>


                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Number of Speeds</p>
                  <div>{data.speeds ? data.speeds : "There is no such data in this product"}</div>
                </div>


                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Weight</p>
                  <div>{data.weight ? data.weight : "There is no such data in this product"} kg</div>
                </div>

              </div>


              <div className='dimensions'>
                <h2>Dimensions</h2>
                
                <div className='dimensions-div' style={{display: 'flex'}}>
                  <p>Length</p>
                  <div>{data.length ? <span>{data.length}sm</span> : "There is no such data in this product"} </div>
                </div>

                <div className='dimensions-div' style={{display: 'flex'}}>
                  <p>Width</p>
                  <div>{data.width ? <span>{data.width}sm</span> : "There is no such data in this product"} </div>
                </div>
                
                <div className='dimensions-div' style={{display: 'flex'}}>
                  <p>Height</p>
                  <div>{data.height ? <span>{data.height}sm</span> : "There is no such data in this product"} </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Specification
