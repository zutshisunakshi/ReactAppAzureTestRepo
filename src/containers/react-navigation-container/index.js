import { connect } from 'react-redux';
import Navigation from '../../components/react-navigation';

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
