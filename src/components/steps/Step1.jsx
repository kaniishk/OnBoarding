import React from 'react'

export const Step1 = ({data,handleChange}) => {
  return (
  <>
    <div className='stepTitle'>
        <h2>Welcome! First things first...</h2>
        <p>You can always change them later.</p>
    </div>
    <form>
        <div className="form-group formInputs" >
            <label htmlFor="fullName">Full Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="fullName"
                name='fullName' 
                placeholder="Steve Jobs"
                value={data.fullName}
                onChange={handleChange}  />
        </div>
        <div className="form-group formInputs">
            <label htmlFor="dispName">Display Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="dispName"
                name='dispName' 
                placeholder="Steve"
                value={data.dispName}
                onChange={handleChange} />
        </div>
        
    </form>
  </>
  )
}
