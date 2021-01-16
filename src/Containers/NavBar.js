import { connect } from 'react-redux';
import NavBar from '../Components/NavBar';
import { signOut } from '../Redux/actions';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)