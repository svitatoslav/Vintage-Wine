import styles from './Title.module.scss';
import cn from 'classnames';


const PageTitle = ({text, type, extraClass}) => {
    let titleStyle = styles.vvSectionTitle

    if (type === "main") {
        titleStyle = styles.vvTitle
    }

    return <h1  data-testid="PageTitle" className={cn(titleStyle, {[extraClass]: extraClass})}>{text}</h1>
}

export default PageTitle

