import React, { useState } from 'react'
// import App from './App'
import Image from "../userIcon.png"
function Chart() {
    const [showPopUp, setShowPopUp] = useState(false)
    const [planning, setPlanning] = useState([])
    const [started, setStarted] = useState([])
    const [done, setDone] = useState([])
    const [addMemberInput, setAddMemberInput] = useState(false)
    const [member, setMember] = useState('')
    const [showMembersData, setShowMmbersData] = useState([])
    const [data, setData] = useState({
        task: '',
        date: '',
        person: '',
        list: '',
    })

    const [isEdit, setEdit] = useState({
        index: -1,
        taskType: ""
    })

    const handleAddMemberChange = (e) => {
        setMember(e.target.value)
    }
    const addMember = () => {
        setAddMemberInput(true)

    }
    const saveAddMember = () => {
        console.log(member)
        setShowMmbersData([...showMembersData, member])
        setMember('')
        setAddMemberInput(false)
    }
    const onAdd = () => {
        setShowPopUp(true)
        setData({
            task: '',
            date: '',
            person: '',
            list: '',
        })
    }
    const handleCancel = () => {
        setShowPopUp(false)
    }

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({ ...data, [name]: value })
    }

    function removeDataFromArray() {
        if (isEdit.index < 0) return
        switch (isEdit.taskType) {
            case "planning": {
                var tempPlanning = planning
                tempPlanning.splice(isEdit.index, 1)
                setPlanning(tempPlanning)
                console.log("planning", planning)
                break;
            }
            case "started": {
                var tempStarted = started
                tempStarted.splice(isEdit.index, 1)
                setStarted(tempStarted)
                console.log("started", started)

                break;
            }
            case "done": {
                var tempDone = done
                done.splice(isEdit.index, 1)
                setDone(tempDone)
                console.log("done", done)

                break;
            }
            default:
        }

    }



    const onSave = () => {
        console.log("form submitted")

        if (data.list === "planning") {
            if (isEdit.index > -1 && isEdit.taskType === "planning") {
                planning[isEdit.index] = data
                // console.log("planning", planning)
            } else {
                removeDataFromArray()
                setPlanning([...planning, data])
            }
        } else if (data.list === "started") {
            if (isEdit.index > -1 && isEdit.taskType === "started") {
                started[isEdit.index] = data
            } else {
                removeDataFromArray()
                setStarted([...started, data])
            }
        } else if (data.list === "done") {
            if (isEdit.index > -1 && isEdit.taskType === "done") {
                done[isEdit.index] = data
            } else {
                removeDataFromArray()
                setDone([...done, data])
            }
        }
        console.log(data)
        setData({
            task: '',
            date: '',
            person: '',
            list: '',
        })
        setEdit({
            index: -1,
            taskType: ""
        })
        setShowPopUp(false)
    }


    const handleDoubleClick = (ind, value) => {
        setShowPopUp(true)
        setEdit({
            index: ind,
            taskType: value.list
        })
        console.log("sdws", value)
        setData(value)
    }

    return (
        <>
            <div className='border-2 border-slate-500 py-6 m-6'>

                <div className='flex justify-between px-20'>
                    <div>Task Board</div>
                    <div className='flex items-center'>
                        {showMembersData.map((value) => (
                            <p className='mx-2'> {value} </p>
                        ))}
                        <button onClick={addMember} className='border-2 p-2'> Add Members</button>
                    </div>
                </div>
                <div className='flex flex-row mt-10 mx-10 justify-around'>
                    <div>
                        <div>Planned</div>
                        <div className="w-[300px] border-2 border-gray">


                            {planning.map((value, index) => (
                                <React.Fragment key={index}  >
                                    <div className='w-[285px] h-[100px] m-[5.5px] border-2 border-gray ' onDoubleClick={() => handleDoubleClick(index, value)}>
                                        <div className='p-1.5' >
                                            <div>{value.task}</div>
                                            <div>Due: {value.date}</div>
                                            <div className='flex justify-end'>
                                                {value.person}<img src={Image} className='ml-2' alt="UserIcon" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}

                            <div className='flex justify-center flex-row'>
                                <button onClick={onAdd}>Add Another Task</button>
                            </div>
                        </div>
                    </div>
                    <div className='' >
                        <div>Started</div>
                        <div className="w-[300px] border-2 border-gray">

                            {started.map((value, index) => (
                                <React.Fragment key={index}>
                                    <div className='w-[285px] h-[100px] m-[5.5px] border-2 border-gray ' onDoubleClick={() => handleDoubleClick(index, value)}>
                                        <div className='p-1.5'>
                                            <div>{value.task}</div>
                                            <div>Due: {value.date}</div>
                                            <div className='flex justify-end'>
                                                {value.person}<img src={Image} className='ml-2' alt="UserIcon" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}


                            <div className='flex justify-center flex-row'>
                                <button onClick={onAdd}>Add Another Task</button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div>Done</div>
                        <div className="w-[300px] border-2 border-gray">
                            {done.map((value, index) => (
                                <React.Fragment key={index}>
                                    <div className='w-[285px] h-[100px] m-[5.5px] border-2 border-gray ' onDoubleClick={() => handleDoubleClick(index, value)}>
                                        <div className='p-1.5'>
                                            <div>{value.task}</div>
                                            <div>Due: {value.date}</div>
                                            <div className='flex justify-end'>
                                                {value.person}<img src={Image} className='ml-2' alt="UserIcon" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}


                            <div className='flex justify-center flex-row'>
                                <button onClick={onAdd}>Add Another Task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {addMemberInput === true ? <div className='w-[400px] text-center z-10  border-2 m-auto py-6 mt-[300px] bg-slate-100 absolute top-0 left-0 right-0'>
                Add Member: <input onChange={handleAddMemberChange} value={member} minLength={!undefined && !null} className='border-2' type='text' placeholder='Enter member name' /> <br />
                <button onClick={saveAddMember} className='border-2 m-4 font-medium w-[100px] '>Save</button>
            </div> : ""}


            {showPopUp === true ?
                <form>
                    <div className='w-[50%] z-10  border-2 m-auto py-6 mt-20 bg-purple-500 absolute top-0 left-0 right-0'>
                        <div className='border-2 mx-auto w-[60%]'>
                            <input onChange={handleOnChange} name='task' value={data.task} className='border-2 w-[100%]' type="text" placeholder='Task' />
                        </div>
                        <div className='mx-auto w-[60%]  mt-10 flex justify-between'>
                            <div>
                                <input onChange={handleOnChange} name='date' value={data.date} type="date" className='border-2 w-[100%]' /></div>
                            <div className='w-[20%]'>
                            <p className='text-white'>Members: </p>
                                <select onChange={handleOnChange} name='person' value={data.person} className="border-2"  >
                                    <option value="0">-_-</option>
                                    {showMembersData.map((value) => (
                                     <option>{value}</option>
                        ))}
                                </select>
                            </div>
                        </div>
                        <div className='mx-auto w-[60%] mt-10 flex justify-end'>
                            <div className='w-[20%]'>
                                <p className='text-white'>List: </p>
                                <select onChange={handleOnChange} name='list' value={data.list} className="border-2"  >
                                   <option value="check-list">-_-</option>
                                    <option value="planning" >Planning</option>
                                    <option value="started">Started</option>
                                    <option value="done">Done</option>
                                </select>
                            </div>
                        </div>
                        <div className='mx-auto  mt-10 flex justify-center'>
                            <button onClick={onSave} className='border-2 p-2 font-medium w-[100px] text-white'>Save</button>
                            <button onClick={handleCancel} className='border-2 w-[100px] ml-6 p-2 font-medium text-white'>Cancel</button>

                        </div>
                    </div>
                </form> : ""}
        </>

    );
}

export default Chart;