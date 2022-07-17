import React from 'react'
import {HiUserGroup,HiUser} from 'react-icons/hi';

export const Step3 = ({data,handleIndvClick,handleTeamClick}) => {

  return (
  <>
    <div className='stepTitle'>
        <h2>How are you planning to use Eden?</h2>
        <p>We'll streamline your setup experience accordingly</p>
    </div>
    <form>
      <div className='container mycard-container'>
        <div className='row' >
          <div className='cardcolumn col-lg-6 col-md-6 col-sm-8 p-1' onClick={handleIndvClick}>
            <div className={data.isIndividual? 'cardSelected' : 'myCard'} >
                <HiUser className='card-icon'/>
                <h6>For myself</h6>
                <p>Write better. Think more clearly. Stay organized.</p>
            </div>
          </div>
            <div className='cardcolumn col-lg-6 col-md-6 col-sm-8 p-1' onClick={handleTeamClick}>
              <div className={data.isIndividual? 'myCard' :'cardSelected'}>
                  <HiUserGroup className='card-icon'/>
                  <h6>With your team</h6>
                  <p>Wikis, docs, tasks & projects, all in one place</p>
              </div>
            </div>
        </div>
      </div>
    </form>
  </>
  )
}
