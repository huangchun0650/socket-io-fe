import { stats } from "../constants";
import styles from '../style';

const Stats = () => {
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <p>{stat.value}</p>
    ))}
  </section>
}

export default Stats