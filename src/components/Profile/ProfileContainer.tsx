import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {ProfileType} from "./ProfileInfo/ProfileInfo";
import {withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    setUserProfile: (user: ProfileType) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)