import { FaBars, FaRegUserCircle } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import { IoChatbubbleEllipsesSharp, IoSearchSharp } from "react-icons/io5"

const DashboardHeader = () => {
    return (
        <header className="box light-shadow">
            <h1 className="disable-guitters">logo</h1>

            <div className="box">
                <div className="search-input box outline hide-in-small">
                    <div className="box center-x ">
                        <IoSearchSharp />
                    </div>

                    <input type="search" name="search" placeholder="Search.." id="search" className="full-width" />
                </div>


                <div className="box">
                    {/* Responsive search icon */}
                    <button className="icon hide-in-large">
                        <IoSearchSharp />
                    </button>

                    <button className="icon">
                        <IoChatbubbleEllipsesSharp />
                    </button>

                    <button className="icon">
                        <IoIosNotifications />
                    </button>

                    <button className="icon avatar">
                        <FaRegUserCircle />
                    </button>

                    <button className="icon hide-in-large">
                        <FaBars />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader