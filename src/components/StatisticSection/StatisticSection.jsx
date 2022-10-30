import style from './StatisticSection.module.css';



export const Statistics = (props) => {
const {good, bad, neutral, total, average} = props;
    
    return ( <div className={style.statBox}>
         <span className={style.statString}>Good:{good}</span>
         <span className={style.statString}>Neutral:{neutral}</span>
         <span className={style.statString}>Bad:{bad}</span>
         <span className={style.statString}>Total:{total}</span>
         <span className={style.statString}>Positive Feedback:{average}%</span>
        
        
    </div>
     
    )
  };

