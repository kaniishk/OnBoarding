import React from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'

export const Step4 = ({data}) => {
  return (
  <>
    <div className='confirmation'>
        <div className='checkmark' >
          <IoIosCheckmarkCircle className="checkmark-icon"/>
        </div>
        <div className='confirm-text'>
          <h2>Congratulations, {data.dispName}</h2>
          <p>You have completed onboarding, you can start using Eden</p>
        </div>
    </div>
  </>
  )
}
