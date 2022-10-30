import style from './FeedBackButtons.module.css';

export const FeedBackOptions = (props) => {
const {name, buttons, neutralHandler, badHandler, goodHandler} = props;
   //  console.log("BTNprops",props);
    return ( <div className={style.btnBox}>
         <button className={style.button} type="button" onClick={goodHandler}>
        {name[0]}
      </button>
         <button className={style.button} type="button" onClick={neutralHandler}>
         {name[1]}
      </button>
         <button className={style.button} type="button" onClick={badHandler}>
         {name[2]}
      </button>
      
    </div>
     
    )
  };
