import React, { useRef} from 'react'

function AddMember({setMemberList , addMember , memberList}) {
    const members = useRef()

    const saveAddMember = () => {
        setMemberList([...memberList , members.current.value])
        addMember()
    }
    return (
        <>
            <div className='w-[400px] text-center z-10  border-2 m-auto py-6 my-auto bg-slate-700 absolute left-0 right-0'>
                <p className='text-white'> </p><input ref={members} className='border-2' type='text' placeholder='Enter member name' /> <br />
                <button onClick={saveAddMember} className='border-2 m-4 font-medium w-[100px] text-white'>Save</button>
            </div>
        </>
    )
}

export default AddMember