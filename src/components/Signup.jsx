
import React from 'react'

class Signup extends React.Component {
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
            <h1>Signup</h1>
            </>
        )
    }
}

export default Signup;