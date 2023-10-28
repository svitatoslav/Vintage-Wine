import styles from './Title.module.scss'


const SectionTitle = ({subText, secText}) => {
    return (
        <h3 data-testid="SectionTitle" className={styles.vvSectionTitle}>
            <span className={styles.vvSubTitle}>{subText}</span> <br/> {secText}
        </h3>
    )
}

export default SectionTitle