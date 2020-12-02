import React, { Component } from 'react'

class Friends extends Component {
    state = {
        value: 0
    }

    batchUpdates = () => {
        this.setState({ value: this.state.value + 1 })
        this.setState({ value: this.state.value + 1 })
        this.setState({ value: this.state.value + 1 })
        console.log(this.state.value)
    }
    render() {
        return (
            <div onClick={this.batchUpdates}>        
                {`Counter is: ${this.state.value}`}
            </div>
        )
    }
}

export default Friends

