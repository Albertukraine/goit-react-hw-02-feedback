
import style from './SectionTitle.module.css';

export const SectionTitle = (props) => {
    const {title} = props;
    return (<h2 className={style.header}>{title}</h2>)
}