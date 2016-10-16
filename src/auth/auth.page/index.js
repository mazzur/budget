import {connect} from 'react-redux';
import Auth from './auth.component';
import {loginWithGithub} from './auth.actions';

export default connect((state) => state, {
    loginWithGithub
})(Auth);