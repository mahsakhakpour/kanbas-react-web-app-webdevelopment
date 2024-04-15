import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
    const [profile, setProfile] = useState({
        username: "", password: "",
        firstName: "", lastName: "", dob: "", email: "", role: "USER"
    });
    const navigate = useNavigate();
    const save = async () => {
        await client.updateUser(profile);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };


    const fetchProfile = async () => {
        const account = await client.profile();
        setProfile(account);
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div >
            {/* <h1>Profile</h1> */}
            <h1>Account</h1>

            <br />
            <br />
            <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-10" >
                Users
            </Link>

            <br />
            < br />
            {profile && (
                <div>
                    <input value={profile.username} onChange={(e) =>
                        setProfile({ ...profile, username: e.target.value })} />
                    <br />
                    <br />
                    <input value={profile.password} onChange={(e) =>
                        setProfile({ ...profile, password: e.target.value })} />
                    <br />
                    <br />
                    <input value={profile.firstName} onChange={(e) =>
                        setProfile({ ...profile, firstName: e.target.value })} />
                    <br />
                    <br />
                    <input value={profile.lastName} onChange={(e) =>
                        setProfile({ ...profile, lastName: e.target.value })} />
                    <br />
                    <br />
                    <input value={profile.dob} type="date" onChange={(e) =>
                        setProfile({ ...profile, dob: e.target.value })} />
                    <br />
                    <br />
                    <input value={profile.email} onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })} />
                    <br />
                    <br />
                    <select style={{ "width": "200px", textAlignLast: "center" }} onChange={(e) =>
                        setProfile({ ...profile, role: e.target.value })}>
                        <option value="FACULTY">Faculty</option>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={save} style={{ "width": "200px" }}
                        className="btn btn-primary w-10" >Save</button>
                    <br />
                    <br />
                    <button onClick={signout} style={{ "width": "200px" }}
                        className="btn btn-danger w-10" >Signout</button>
                </div>

            )}
        </div>
    );
}