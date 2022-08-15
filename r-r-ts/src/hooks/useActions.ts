import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/action-creators/'


export const useActions = () => {
    const dispatch = useDispatch()
    // console.log('ActionCreators', ActionCreators);
    return bindActionCreators(ActionCreators, dispatch)
}