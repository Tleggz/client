import React from 'react';
import { useState } from 'react';

const createProject = (props) => {
    const { projectList,setProjectList } = props;

    const [projectName, setProjectName] = useState("");
    const [date, setDate] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/projects", {
                projectName,
                date,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProjectList([...projectList, res.data]);
                setProjectName("");
                setDate("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>
                Project Manager
            </header>
            <form onSubmit={handleSubmit}>
                <div className="form-fields">
                    <label>Project Name:</label>
                    <input
                        onChange={(e) => setProjectName(e.target.value)}
                        value={projectName}
                        name="projectName"
                        type="text"
                        required
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Date:</label>
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        name="date"
                        type="date"
                        required
                    />
                </div>

                <br />

                <button type="submit">Plan Project</button>
            </form>
        </div>
    );
}

module.exports = createProject;
