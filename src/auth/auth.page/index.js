import { connect } from 'react-redux';
import Auth from './auth.component';
import { loginWithGithub } from '../../state/children/auth';

export default connect(state => state, {
    loginWithGithub
})(Auth);
