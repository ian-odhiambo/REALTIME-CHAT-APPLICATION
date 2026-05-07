import SearchInput from './SearchInput'
import Conversation from './Conversation'

const Sidebar = () => {
  return (
    <div>
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversation/>
        {/* <Conversation/>
        <LogoutButton/> */}
    </div>
  );
};

export default Sidebar;