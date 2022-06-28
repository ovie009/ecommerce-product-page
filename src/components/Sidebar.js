import close from '../images/icon-close.svg';

const Sidebar = ({handleSidebar}) => {
    return (  
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="close-icon-wrapper">
                    <button type='button' className='close-sidebar' onClick={handleSidebar}>
                        <img src={close} alt="close icon" className="close" />
                    </button>
                </div>
                <ul className="sidebar-list">
                    <li> collection </li>
                    <li> men </li>
                    <li> women </li>
                    <li> about </li>
                    <li> contact </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Sidebar;