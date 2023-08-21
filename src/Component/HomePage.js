import React, { useRef, useState } from "react";
import AddMember from "./AddMember";
import Planned from "./Planned";
import Start from "./Start";
import Done from "./Done";
import Popup from "./Popup"

function HomePage() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [planning, setPlanning] = useState([]);
    const [started, setStarted] = useState([]);
    const [done, setDone] = useState([]);
    const [showMemberPopup, setShowMemberPopup] = useState(false);
    const [memberList, setMemberList] = useState([]);
    const taskData = useRef();
    const dateData = useRef();
    const personData = useRef();
    const listData = useRef();
    const [isEdit, setEdit] = useState({
        index: -1,
        taskType: "",
        editableValue: {}
    });


    const addMember = () => {
        setShowMemberPopup(!showMemberPopup);
    };
    const onAdd = () => {
        setShowPopUp(true);
    };
    const handleCancel = () => {
        setShowPopUp(false);
    };


    function removeDataFromArray() {
        if (isEdit.index < 0) return;
        switch (isEdit.taskType) {
            case "planning": {
                var tempPlanning = planning;
                tempPlanning.splice(isEdit.index, 1);
                setPlanning(tempPlanning);
                break;
            }
            case "started": {
                var tempStarted = started;
                tempStarted.splice(isEdit.index, 1);
                setStarted(tempStarted);
                break;
            }
            case "done": {
                var tempDone = done;
                done.splice(isEdit.index, 1);
                setDone(tempDone);
                break;
            }
            default:
        }
    }

    const onSave = () => {
        const allData = {
            taskData: taskData.current.value,
            dateData: dateData.current.value,
            personData: personData.current.value,
            listData: listData.current.value,
        }
        if (allData.taskData !== '') {
            if (allData.listData === "planning") {
                if (isEdit.index > -1 && isEdit.taskType === "planning") {
                    planning[isEdit.index] = allData;
                    // console.log("planning", planning)
                } else {
                    removeDataFromArray();
                    setPlanning([...planning, allData]);
                }
            } else if (allData.listData === "started") {
                if (isEdit.index > -1 && isEdit.taskType === "started") {
                    started[isEdit.index] = allData
                } else {
                    removeDataFromArray();
                    setStarted([...started, allData]);
                }
            } else if (allData.listData === "done") {
                if (isEdit.index > -1 && isEdit.taskType === "done") {
                    done[isEdit.index] = allData;
                } else {
                    removeDataFromArray();
                    setDone([...done, allData]);
                }
            }
            setEdit({
                index: -1,
                taskType: "",
            });
        }
        setShowPopUp(false);
    };
    const handleDoubleClick = (ind, value) => { // 1 state update -> one rerender
        setShowPopUp(true);
        setEdit({
            index: ind,
            taskType: value.listData,
            editableValue: value
        });
        // console.log("sdws", value);
    };

    return (
        <>
            <div className="border-2 border-slate-500 py-6 m-6">
                <div className="flex justify-between px-20">
                    <div>Task Board</div>
                    <div className="flex items-center">
                        {memberList.map((value) => (
                            <p className="mx-2"> {value} </p>
                        ))}
                        <button onClick={addMember} className="border-2 p-2">

                            Add Members
                        </button>
                    </div>
                </div>
                <div className="flex flex-row mt-10 mx-10 justify-around">
                    <div>
                        <div>Planned</div>
                        <Planned planning={planning} handleDoubleClick={handleDoubleClick} onAdd={onAdd} />
                    </div>
                    <div>
                        <div>Started</div>
                        <Start started={started} handleDoubleClick={handleDoubleClick} onAdd={onAdd} />
                    </div>
                    <div>
                        <div>Done</div>
                        <Done done={done} handleDoubleClick={handleDoubleClick} onAdd={onAdd} />
                    </div>

                </div>
            </div>

            {showMemberPopup ? (<AddMember setMemberList={setMemberList} addMember={addMember} memberList={memberList} />) : ""}
            {showPopUp ? <Popup editableValue={isEdit?.editableValue} onSave={onSave} onCancel={handleCancel} memberList={memberList} taskData={taskData} dateData={dateData} listData={listData} personData={personData} /> : ''}
        </>
    );
}

export default HomePage;
