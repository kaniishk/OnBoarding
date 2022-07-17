import React from 'react'

export const Step2 = ({data,handleChange}) => {
  return (
  <>
    <div className='stepTitle'>
        <h2>Let's set up a home for all your work</h2>
        <p>You can always create another workspace later.</p>
    </div>
    <form>
        <div className="form-group formInputs" >
            <label htmlFor="workspName">Workspace Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="workspName"
                name='workspName' 
                placeholder="Eden"
                value={data.workspName}
                onChange={handleChange}  />
        </div>
        <div className="form-group formInputs">
            <label htmlFor="workspUrl">Workspace URL (optional)</label>
            <div style={{display:'inline-flex'}}>            
                <div className="input-group-prepend">
                    <div className="input-group-text">www.eden.com/</div>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    id="workspUrl"
                    name='workspUrl' 
                    placeholder="Example"
                    value={data.workspUrl}
                    onChange={handleChange} />    
            </div>  
        </div>
    </form>
  </>
  )
}
