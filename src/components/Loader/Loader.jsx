import { ProgressBar } from  'react-loader-spinner'

 const Loader = ()=>(
    <ProgressBar
  height="150"
  width="150"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: '0 auto',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '9999',
  }}
  wrapperClass="progress-bar-wrapper"
  borderColor = 'none'
  barColor = '#1976d2'
/>
);

export default Loader;