import styles from './BaseTemplate.module.css';

export default function BaseTemplate({ sampleText }) {
  return <div className={styles.container}>{sampleText}</div>;
}
