

const Sidebar = (props) => {
    return (
        <div>
            <div>
                <div> 
                    <img src={props.src} />
                    {props.sidebar} </div>
            </div>
        </div>
    )
}

export default Sidebar;