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
                  <div>{data.specification?.general?.material}</div>
                </div>

                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Engine Type</p>
                  <div>{data.specification?.general?.engine}</div>
                </div>


                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Battery Voltage</p>
                  <div>{data.specification?.general?.batteryVolt}</div>
                </div>


                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Battery Type</p>
                  <div>{data.specification?.general?.batteryType}</div>
                </div>


                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Number of Speeds</p>
                  <div>{data.specification?.general?.speeds}</div>
                </div>


                <div className='general-div' style={{ display: 'flex' }}>
                  <p>Weight</p>
                  <div>{data.specification?.general?.weight} kg</div>
                </div>

              </div>


              <div className='dimensions'>
                <h2>Dimensions</h2>
                
                <div className='dimensions-div' style={{display: 'flex'}}>
                  <p>Length</p>
                  <div>{data.specification?.dimensions?.length} sm</div>
                </div>

                <div className='dimensions-div' style={{display: 'flex'}}>
                  <p>Width</p>
                  <div>{data.specification?.dimensions?.width} sm</div>
                </div>
                
                <div className='dimensions-div' style={{display: 'flex'}}>
                  <p>Height</p>
                  <div>{data.specification?.dimensions?.height} sm</div>
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
