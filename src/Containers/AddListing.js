import { connect } from 'react-redux';
import AddListing from '../Components/AddListing';
import { addBusiness } from '../Redux/actions';

const mapStateToProps = (state) => {
    return {
        business: state.business,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)
