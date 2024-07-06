import React from 'react'
import FormDescription from './FormDescription'
import Form from './Form'

const Sign = (props) => {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <FormDescription mode={props.mode} />
          <Form changeUser={props.changeUser} usernameChecks={props.usernameChecks} sign={props.sign} toggleSign={props.toggleSign} mode={props.mode} />
        </div>
      </div>
  )
}

export default Sign
