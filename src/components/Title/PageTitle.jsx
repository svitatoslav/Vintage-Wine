import styles from './Title.module.scss'


const PageTitle = ({children, type}) => {
    let titleStyle = styles.vvSectionTitle

    if (type === "main") {
        titleStyle = styles.vvTitle
    }

    return <h1  data-testid="PageTitle" className={titleStyle}>{children}</h1>
}

export default PageTitle

