import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';

class Loginscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            loginscreen: [],
            loginmessage: '',
            buttonLabel: 'Register',
            isLogin: true
        }
    }

    componentWillMount() {
        const loginscreen = [];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        const loginmessage = "Not registered yet? Register Now !";
        this.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage
        })
    }

    render() {
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style}
                                          onClick={(event) => handleClick()}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
function handleClick(event){
    let loginscreen;
// console.log("event",event);
    let loginmessage;
    if(this.state.isLogin){
        loginscreen = [];
        loginscreen.push(<Register parentContext={this}/>);
        loginmessage = "Already registered.Go to Login";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage,
            buttonLabel:"Login",
            isLogin:false
        })
    }
    else{
        loginscreen = [];
        loginscreen.push(<Login parentContext={this}/>);
        loginmessage = "Not Registered yet.Go to registration";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage,
            buttonLabel:"Register",
            isLogin:true
        })
    }
}

const style = {
    margin: 15,
};
export default Loginscreen;