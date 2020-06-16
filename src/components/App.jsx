import React, { Component } from 'react'

// export default App
// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             text: ""
//         }
//     }
//     render() {
//         return  (
//              <div>
//                <h1>My Favorite food is {this.props.text} ! </h1>
//            </div>
//            );
//        }
// }
class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            placeholder: "Insert Text Here!",
            usertext:"",
            hasloaded: false,
        }
        
    } 
    componentDidMount = () => {
        this.setState({hasloaded: true})
    }
    toggleValue = () => {
        this.setState({hasloaded: true })
    }
    getInput = (e) => {
        this.setState({usertext: e.target.value})
    }
    render() {
        if (this.state.hasloaded === true) {
            return (
                <React.Fragment>
                    <div>
                    <input 
                    placeholder=""
                    onChange= {this.getInput}
                    type="text"
                    />
                    <button onClick= {this.toggleValue}>Submit</button>
                </div>
                </React.Fragment>
                )

        }
        else {
        return (
        <React.Fragment>
            <div>
            <h1>Loading...</h1>
            <button onClick= {this.toggleValue}>Click To Stop Loading...</button>
        </div>
        </React.Fragment>
        )
    }
}
}
    
export default App
