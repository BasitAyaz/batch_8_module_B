import { useEffect, useState } from "react";
import BAInput from "../component/BAInput";
import BAButton from "../component/BAButton";
import { fbAdd, fbGet } from "../config/firebasemethods";
import { Z_ASCII } from "zlib";

export default function Task() {
  const [taskList, setTaskList] = useState<any>([]);
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  }

  const addTask = () => {
    fbAdd("tasks", model)
      .then((res) => {
        console.log(res);
        setModel({});
        getTask();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getTask = () => {
    fbGet("tasks")
      .then((res: any) => {
        console.log(res);
        setTaskList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12">
        <div>
          <h1 className="text-4xl text-white">Task</h1>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="p-10">
          <div>
            <div className="py-2">
              <BAInput
                value={model.task}
                onChange={(e: any) => fillModel("task", e.target.value)}
                label="Task"
              />
            </div>
            <div className="py-2">
              <BAInput
                value={model.assignee}
                onChange={(e: any) => fillModel("assignee", e.target.value)}
                label="Assignee"
              />
            </div>
            <div className="py-2">
              <BAButton onClick={addTask} label="Add Task" />
            </div>
          </div>
        </div>
        <div className="p-10 col-span-3">
          {taskList && taskList.length > 0
            ? taskList.map((x: any) => (
                <div
                  className="rounded bg-white drop-shadow-xl my-2 p-5"
                  key={x.id}
                >
                  <h1 className="text-3xl">{x.task}</h1>
                  <p>{x.assignee}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
