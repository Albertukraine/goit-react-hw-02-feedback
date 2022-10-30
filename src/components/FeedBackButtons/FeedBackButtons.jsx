import PropTypes from 'prop-types';
import style from './FeedBackButtons.module.css';

export const FeedBackOptions = props => {
  const { name, neutralHandler, badHandler, goodHandler } = props;
  //  console.log("BTNprops",props);
  return (
    <div className={style.btnBox}>
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
  );
};

FeedBackOptions.propTypes = {
  name: PropTypes.array,
  neutralHandler: PropTypes.func,
  badHandler: PropTypes.func,
  goodHandler: PropTypes.func,
};
