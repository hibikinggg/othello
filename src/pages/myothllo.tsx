import { useEffect, useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [count, setcount] = useState(0);
  useState(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <div className={styles.countainer}>
      <button onClick={() => setcount(count + 1)} />
    </div>
  );
};
export default Home;
