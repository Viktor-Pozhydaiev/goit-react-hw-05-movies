import { Bars } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader_position}>
      <Bars
        height="80"
        width="80"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
