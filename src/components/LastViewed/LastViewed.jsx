import SectionTitle from './../Title/SectionTitle';
import CustomSlider from './../CustomSlider/CustomSlider';

import styles from './LastViewed.module.scss';

const LastViewed = ({ lastViewed }) => {
  
  return (
     
    <div className={styles.LastViewed} data-testid="LastViewed">
        <SectionTitle secText="You have viewed" />
        {/* <CustomSlider toShow={3} toScroll={1} sliderArray={lastViewed} /> */}
    </div>
  )
};

export default LastViewed;
