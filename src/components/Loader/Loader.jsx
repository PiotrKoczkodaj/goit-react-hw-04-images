import { Watch } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = ({isLoading}) => {
    
    return (
         <div className={styles.loader}>
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={isLoading}
        />
      </div>
    )
}