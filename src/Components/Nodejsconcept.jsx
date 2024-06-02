import React from 'react'
import { useQuery } from "react-query";
const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/nodejs");
    return res.json();
};

const Nodejsconcept = () => {
    const { data, status } = useQuery("nodejs", fetchUsers);

    return (
        <div>
            <div>
                {status === "error" && <p>Error fetching data</p>}
                {status === "loading" && <p>Fetching data...</p>}
                {status === "success" && (
                    <div>
                        <h1>NodeJs Tutorial</h1>
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

        </div>
    )
}
export default Nodejsconcept;
