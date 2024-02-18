import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaClock, FaDesktop, FaSignOutAlt, FaQuestion} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" style={{ color: 'white'  }} />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={{ color: 'red', backgroundColor: 'white' }}/>  },
    { label: "Courses",   icon: <FaBook className="fs-2" style={{ color: 'red'  }} />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" style={{ color: 'red'  }}/> },
    { label: "Inbox",  icon: <FaBook className="fs-2" style={{ color: 'red'  }}/> },
    { label: "History",  icon: <FaClock className="fs-2" style={{ color: 'red'  }}/> },
    { label: "Studio",  icon: <FaDesktop className="fs-2" style={{ color: 'red'  }}/> },
    { label: "Commons",  icon: <FaSignOutAlt className="fs-2" style={{ color: 'red'  }}/> },
    { label: "Help",  icon: <FaQuestion className="fs-2" style={{ color: 'red'  }}/> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;