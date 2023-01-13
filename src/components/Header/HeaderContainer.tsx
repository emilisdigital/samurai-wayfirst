import React from 'react';
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Header} from "./Header";

type PropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                let {id, email, login} = response.data.data
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} // {...this.props}
                       login={this.props.login}/>
    }
}

let mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
