import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Htmlcss.css";
import { useQuery } from "react-query";
const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/htmlcss");
    return res.json();
};

const Htmlcss = () => {

    const { data, status } = useQuery("htmlcss", fetchUsers);

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/htmlcss')
    //         .then(res => setData(res.data))
    //         .catch(error => console.log(error)); // Add error handling
    // }, []);

    return (
        <div>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div>
                    <h1>HTML Tutorial</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Topics</th>
                                <th>Documentation</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((ele, i) => (
                                    <tr key={i}>
                                        <td>{ele.topics}</td>
                                        <td><a href={ele.documentation} target="__blank">Doc</a></td>
                                        <td><a href={ele.link} target="__blank">YouTube</a></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}

export default Htmlcss;
