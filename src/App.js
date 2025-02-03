import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(null);
  const [value, setValue] = useState("");

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData({});
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>

      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}

      <h1>Hello world</h1>

      <button data-testid="toggle-btn" onClick={onClick}>
        test
      </button>

      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value..."
      />
    </div>
  );
}

export default App;
