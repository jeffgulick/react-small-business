import { connect } from 'react-redux';
import Listings from '../Components/Listings';

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(Listings)
