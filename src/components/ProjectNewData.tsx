import { useState, useEffect } from "react";
import {
  GanttComponent,
  Inject,
  Selection,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-gantt";
import { SkeletonComponent } from "@syncfusion/ej2-react-notifications";
import Progressbar from "./Progressbar";

interface Subtask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress: number;
  Predecessor: string;
}

interface projectNewData {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  EndDate: Date;
  subtasks: Subtask[];
}

const taskFields: any = {
  id: "TaskID",
  name: "TaskName",
  startDate: "StartDate",
  endDate: "EndDate",
  duration: "Duration",
  progress: "Progress",
  dependency: "Predecessor",
  child: "subtasks",
};
const labelSettings: any = {
  leftLabel: "TaskName",
};

const projectStartDate: Date = new Date("03/24/2019");
const projectEndDate: Date = new Date("07/06/2019");

export default function ProjectNewData() {
  const [projectData, setProjectData] = useState<projectNewData[]>([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/projectNewData")
        .then((res) => res.json())
        .then((data) => {
          setProjectData(data);
        });
    }, 2000);
  }, []);

  useEffect(() => {
    // Hide free account error message
    if (document.readyState === "complete") {
      const freeAccountMessage = document.querySelector("body");
      freeAccountMessage?.lastElementChild?.remove();
    }
  });

  return (
    <div className="ProjectNewData">
      <Progressbar />
      {projectData.length > 0 ? (
        <GanttComponent
          id="Default"
          dataSource={projectData}
          treeColumnIndex={1}
          taskFields={taskFields}
          labelSettings={labelSettings}
          height="410px"
          projectStartDate={projectStartDate}
          projectEndDate={projectEndDate}
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" width="80"></ColumnDirective>
            <ColumnDirective
              field="TaskName"
              headerText="Job Name"
              width="250"
              clipMode="EllipsisWithTooltip"
            ></ColumnDirective>
            <ColumnDirective field="StartDate"></ColumnDirective>
            <ColumnDirective field="Duration"></ColumnDirective>
            <ColumnDirective field="Progress"></ColumnDirective>
            <ColumnDirective field="Predecessor"></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection]} />
        </GanttComponent>
      ) : (
        <SkeletonComponent
          className="animate-pulse bg-gray-200"
          id="skeletonRectangle"
          shape="Rectangle"
          width="100%"
          height="410px"
        ></SkeletonComponent>
      )}
    </div>
  );
}
