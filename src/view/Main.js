import React, { useState } from "react";
import Backlog from "../components/Backlog";
import Card from "../components/Card";
import InProgress from "../components/InProgress";
import Completed from "../components/Completed";

const Main = (props) => {

    const [projectList, setProjectList] = useState([]);

    return (
        <div>
            <Backlog
                projectList={projectList}
                setProjectList={setProjectList}
            />
            <Card
                projectList={projectList}
                setProjectList={setProjectList}
            />
            <InProgress
                projectList={projectList}
                setProjectList={setProjectList}
            />
            <Completed
                projectList={projectList}
                setProjectList={setProjectList}
            />
        </div>
    );
}

module.exports = Main;