import styles from './Title.module.scss'


const PageTitle = ({text, type}) => {
    let titleStyle = styles.vvSectionTitle

    if (type === "main") {
        titleStyle = styles.vvTitle
    }

    return (
            <h1  data-testid="PageTitle" className={titleStyle}>{text}</h1>
    )
}

export default PageTitle