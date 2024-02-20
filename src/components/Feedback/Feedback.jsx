import styles from './Feedback.module.css'

export const Feedback = ({ feedback: {good, neutral, bad}, totalFeedback}) =>{
    return (
       <ul className={styles.none}>
         <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%</li>
       </ul>
    );
};