import React from 'react'


function Popup({ onCancel, onSave, taskData, dateData, listData, personData, memberList }) {
    const onSaveFunc = () => {
        onSave()
    }
    function onCancelFunc() {
        onCancel()
    }
    return (

        <form>
            <div className="w-[50%] z-10  border-2 m-auto py-6 mt-20 bg-slate-700 absolute top-0 left-0 right-0">
                <div className="border-2 mx-auto w-[60%]">
                    <input ref={taskData} className="border-2 w-[100%]" type="text" placeholder="Task" />
                </div>
                <div className="mx-auto w-[60%]  mt-10 flex justify-between">
                    <div>
                        <input ref={dateData} type="date" className="border-2 w-[100%]" />
                    </div>
                    <div className="w-[20%]">
                        <p className="text-white">Members: </p>
                        <select ref={personData} className="border-2">
                            <option value="0">-_-</option>
                            {memberList.map((value) => (
                                <option>{value}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mx-auto w-[60%] mt-10 flex justify-end">
                    <div className="w-[20%]">
                        <p className="text-white">List: </p>
                        <select ref={listData} className="border-2">
                            <option value="check-list">-_-</option>
                            <option value="planning">Planning</option>
                            <option value="started">Started</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                </div>
                <div className="mx-auto  mt-10 flex justify-center">
                    <button onClick={onSaveFunc} className="border-2 p-2 font-medium w-[100px] text-white">Save </button>
                    <button onClick={onCancelFunc} className="border-2 w-[100px] ml-6 p-2 font-medium text-white">Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default Popup