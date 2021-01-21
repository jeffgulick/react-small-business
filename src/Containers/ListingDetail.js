import { connect } from 'react-redux';
import ListingDetail from '../Components/ListingDetail';
import { addLocation } from '../Redux/actions';

const mapStateToProps = (state) => {
    return {
        business: state.business, 
        location: state.location
    }
}

///////////////////////////////////////////////////
const mapDispatchToProps = (dispatch) => {
    return {
        addLocation: (location)=> dispatch(addLocation(location))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListingDetail)

