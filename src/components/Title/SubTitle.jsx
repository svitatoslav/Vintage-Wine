import styles from './Title.module.scss'


const SubTitle = ({text, type}) => {
    let titleStyle = styles.vvSubTitle

    if (type === "bigSub") {
        titleStyle = styles.vvBigSubTitle
    }

    return (
        <h3  data-testid="subTitle" className={titleStyle}>{text}</h3>
    )
}

export default SubTitle