/* import React from 'react'

class Login extends React.Component {
    render(){
        return <h1>Login</h1>;
    }
}

export default Login; */
/* 
import React from 'react'

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    handleSubmit = () => {
        this.setState( { count : 1});
        console.log(this.state)
    }

    render(){
        return <h1 onClick={this.handleSubmit}>Login</h1>;
    }
}

export default Login; */


/* import React from 'react'

class Login extends React.Component {
    render(){
        return <h1>Login</h1>;
    }
}

export default Login; */

import React from 'react'

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    handleSubmit = () => {
        this.setState( { count : 1});
        console.log(this.state)
    }

    render(){
        return (
            <>
            <h1>Login</h1>
            </>
        )
    }
}

export default Login;