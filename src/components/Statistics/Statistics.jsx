import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
        <ul className={s.list}>
            <li className={s.item}>
                <p className={s.text}>Good: <span className={s.span}>{good}</span></p>
            </li>
            <li className={s.item}>
                <p className={s.text}>Neutral: <span className={s.span}>{neutral}</span></p>
            </li>
            <li className={s.item}>
                <p className={s.text}>Bad: <span className={s.span}>{bad}</span></p>
            </li>
            <li className={s.itemTot}>
                <p className={s.textTot}>Total: <span className={s.span}>{total}</span></p>
            </li>
            <li className={s.itemRes}>
                <p className={s.textRes}>Positive feedback: <span className={s.span}>{positiveFeedback}%</span></p>
            </li>
        </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  };

export default Statistics