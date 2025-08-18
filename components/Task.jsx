// import edit from '../src/assets/edit.png';


export default function Task(props){
    const getColor = (priorityColor)=>{
        switch (priorityColor) {
            case 'High':
                return '#f73446';
            case 'Medium':
                return '#ffbd21';
            case 'Low':
                return '#0ac947';
            default:
                return 'black'; 
        }
    }

    return(
        <>
            {/* <button>{props.status}</button> */}

            <div className="cards">
                <div className="taskName">
                    <span className="grayColor">Task</span>
                    <span>{props.title}</span>
                </div>
                <div className="prioritySet">
                    <span className="grayColor">Priority</span>
                    <span style={{color: getColor(props.priority), fontSize:"14px", fontWeight:"bold"}}>{props.priority}</span>
                </div>
                <div className="divStatus">
                    <button  className="status">{props.status}</button>
                </div>
                <div className="progress">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="circular-progressbar">
                       <circle className="circle-background" cx="12" cy="12" r="11" strokeWidth="2px"></circle>
                        <circle className="circle-progress" cx="12" cy="12" r="11" strokeWidth="2px" transform="rotate(-90 12 12)"></circle>
                    </svg>
                </div>
                <div className="actions">
                    <img className="edit" src="../src/assets/edit.png" alt="" onClick={props.onEdit} />
                    <img src="../src/assets/delete.png" alt="" />
                </div>
            </div>
        </>
    )
}