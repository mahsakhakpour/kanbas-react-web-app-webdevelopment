import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "iron_man", password: "stark123", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    const response = await client.signin(credentials);
    console.log(response)
    if (response) {    
      navigate("/Kanbas/Account/Profile");
    }
  };
  return (
    <div>
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })} />
        <br />
        <br />
      <input value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
        <br />
        <br />
      <button onClick={signin} style={{ "backgroundColor": "blue",
          "color": "white", "padding": "10px", "width" : "197px"}} className="btn btn-primary"> Signin </button>
          <br />
          <br />

{/* 
<button onClick={signin} style={{ "backgroundColor": "blue",
          "color": "white", "padding": "10px", "width" : "197px"}} className="btn btn-primary"> Signup </button> */}


    </div>
  );
}

