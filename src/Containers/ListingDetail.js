import { connect } from 'react-redux';
import ListingDetail from '../Components/ListingDetail';

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(ListingDetail)

