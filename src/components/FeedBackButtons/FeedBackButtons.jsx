import PropTypes from 'prop-types';
import style from './FeedBackButtons.module.css';

export const FeedBackOptions = ({name, onClickHandler}) => {
 
  // console.log("BTNprops",name);
  return <div className={style.btnBox}> 
     {
       name.map(item => (
        <button className={style.button} key={item} name={item} type="button" onClick={onClickHandler}>
          {item}
        </button>
        )) 

     }
    </div>

   
  
};


FeedBackOptions.propTypes = {
  name: PropTypes.array,
  neutralHandler: PropTypes.func,
  badHandler: PropTypes.func,
  goodHandler: PropTypes.func,
};
