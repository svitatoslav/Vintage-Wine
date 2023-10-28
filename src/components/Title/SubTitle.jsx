import styles from './Title.module.scss'


const SubTitle = ({text}) => {

    return (
        <h3  data-testid="subTitle" className={styles.vvSubTitle}>{text}</h3>
    )
}

export default SubTitle