import React from 'react'
import Image from '../Images/userIcon.png'


function Planned({ planning, handleDoubleClick, onAdd }) {
    const onAddFunc = () => {
        onAdd()
    }
    return (
        <>
            <div className="w-[300px] border-2 border-gray">
                {planning.map((value, index) => (
                    <div className="w-[285px] h-[100px] m-[5.5px] border-2 border-gray " key={index} onDoubleClick={() => handleDoubleClick(index, value)} >
                        <div className='p-1.5' >
                            <div>{value.taskData}</div>
                            <div>Due: {value.dateData}</div>
                            <div className='flex justify-end'>
                                {value.personData}<img src={Image} className='ml-2' alt="UserIcon" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex justify-center flex-row">
                    <button onClick={onAddFunc}>Add Another Task</button>
                </div>
            </div>
        </>
    )
}

export default Planned