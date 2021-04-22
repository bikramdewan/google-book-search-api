import { useEffect, useState, useRef } from 'react';
​
const IntervalComponent = () => {
  const intervalRef = useRef();
​
  useEffect(() => {
    console.log('Component mounted');
​
    intervalRef.current = setInterval(() => {
      console.log('Interval tick');
    }, 1000);
​
    return () => {
      clearInterval(intervalRef.current);
      console.log('Component unmounted');
    }
  }, []);
​
  return <></>;
}
​
const App = () => {
  const [flag, setFlag] = useState(false);
​
  return (
    <>
      <button onClick={() => setFlag(!flag)}>Toggle Interval</button>
      {flag ? <IntervalComponent /> : <></>}
    </>
  )
}
​
export default App;