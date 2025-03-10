import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleonClick}>그냥 넣어놓은 버튼입니다 ^_^. .</button>
      <br />
      {count}
    </>
  );
}

export default App;
