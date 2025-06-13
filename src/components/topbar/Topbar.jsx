import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <img src="src\assets\person\logo1.webp" alt="" />
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          {/* using mui */}
          <Search className="searchIcon" />
          {/* search bar */}
          <input
            type="text"
            className="searchInput"
            placeholder="Search for your friends post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarL">
          <span className="topbarLinks">HomePage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            {/* icon for person */}
            <Person />
            {/* pending msg */}
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            {/* icon for Chat */}
            <span className="topbarIconBadge">3</span>
            {/* pending msg */}
          </div>
          <div className="topbarIconItem">
            <Notifications />
            {/* icon for notification */}
            <span className="topbarIconBadge">3</span>
            {/* pending msg */}
          </div>
        </div>
        <img src="src\assets\person\1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
