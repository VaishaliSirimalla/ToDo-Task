export default function Header({ modalOpen, handleOpen }){
    return (
        <>
            <div className="title">
                <h1>Task List</h1>
                <button onClick={handleOpen}>+ Add Task</button>
            </div>
        </>
        
    )
}