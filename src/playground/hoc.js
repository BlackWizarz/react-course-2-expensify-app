// Higher Order Component (HOC) a component (HOC) that renders another compoenet
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    }
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} /> 
            ):(
                <p>Please log in to view the info</p>
            )} 
        </div>
    )
}



const AuthInfo = requireAuthentication(Info)

const AdiminInfo = withAdminWarning(Info)

// ReactDOM.render(<AdiminInfo isAdmin={true} info="This are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the details" />, document.getElementById('app'))
