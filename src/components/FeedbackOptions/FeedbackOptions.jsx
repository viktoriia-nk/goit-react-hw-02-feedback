import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    // console.log(options)
    return (
        <ul className={s.btnList}>
            {options.map(option=>(
                <li className={s.bthItem} key={option}>
                <button className={s.btn} type='button' name={option} onClick={onLeaveFeedback}>{option}</button>
                
            </li>
            ))}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  

export default FeedbackOptions