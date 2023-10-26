import styles from './Titile.module.scss'


const Title = ({text, type}) => {
    let TitleClass;

    if (type === "LilTitle") {
        TitleClass = styles.LilTitle
    } else {
        TitleClass = styles.Title
    }

    return (
        <>
            <h1  data-testid="Title" className={TitleClass}>{text}</h1>
        </>
    )
}

export default Title