/**
 * Loading component o show  in case of the app need some fetch or login
 * performance
 */
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

export default Loading;
