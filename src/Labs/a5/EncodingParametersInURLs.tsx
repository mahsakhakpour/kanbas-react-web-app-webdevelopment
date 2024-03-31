import React, { useEffect, useState } from "react";
import axios from "axios";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");

  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };

  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);

    setResult(response.data);
  };



  useEffect(() => {
    fetchWelcome();
  }, []);



  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      
      
<br />
<br />



<h4>Calculator</h4>
      <input type="number" value={a}
        onChange={(e: any) => setA(e.target.value)} />
      <br />
      <br />
      <input type="number"
        onChange={(e: any) => setB(e.target.value)} value={b} />
      <br />
      <br />

      <input value={result} type="number" readOnly />
      <br />
      






      <h3>Path Parameters</h3>
      <br />
      <a className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Substract {a} - {b}
      </a>
      <h3>Query Parameters</h3>
      <br />
      <a className="btn btn-success"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b}
      </a>
      <a className="btn btn-warning"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b}
      </a>

      <h3>Encoding Parameters In URLs</h3>
      <h3>Calculator</h3>
      <input type="number" value={a}
        onChange={(e: any) => setA(e.target.value)} />
      <br />
      <br />
      <input type="number"
        onChange={(e: any) => setB(e.target.value)} value={b} />
      <br />
      <br />

      <input value={result} type="number" readOnly />
      <br />
      

      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} className="btn btn-primary"
        style={{ width: '250px', display: 'inline-block', textAlign: 'center' }}>

        Fetch Sum of {a} + {b}
      </button>
      <br />
      <br />
      <button onClick={() => fetchSubtraction(a, b)} className="btn btn-danger"
        style={{ width: '250px', display: 'inline-block', textAlign: 'center' }}>
        Fetch Substraction of {a} - {b}
      </button>
    </div>
  );
}
export default EncodingParametersInURLs;

