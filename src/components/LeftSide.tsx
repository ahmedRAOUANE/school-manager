"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaRegUserCircle, FaUsers } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { GrLogout } from 'react-icons/gr';
import { ImUsers } from 'react-icons/im';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';

const LeftSide = () => {
    const pathname = usePathname();
    const role = "Admin";

    const links = [
        {
            name: "Admin",
            path: '/admin',
            icon: <GoHomeFill />,
            visible: ["Admin"]
        },
        {
            name: "Teacher",
            path: '/teacher',
            icon: <ImUsers />,
            visible: ["Admin", "Student", "Parent", "Teacher"]
        },
        {
            name: "Student",
            path: '/students',
            icon: <LuUsers />,
            visible: ["Admin", "Student", "Teacher"]
        },
        {
            name: "Parent",
            path: '/parent',
            icon: <FaUsers />,
            visible: ["Admin", "Teacher", "Parent"]
        },
        {
            name: "Classes",
            path: '/classes',
            icon: <GiNotebook />,
            visible: ["Admin", "Teacher", "Student", "Parent"]
        },
    ]

    const otherLinks = [
        {
            name: "profile",
            path: "/profile",
            icon: <FaRegUserCircle />
        },
        {
            name: "settings",
            path: "/settings",
            icon: <IoSettingsOutline />
        },
        {
            name: "logout",
            path: "/",
            icon: <GrLogout />
        },
    ]

    const buttonContent = (link: { icon: React.ReactNode, name: string }) => {
        return <>
            {link.icon}

            <small className='hide-in-small'>
                {link.name}
            </small>
        </>
    }

    return (
        <div className='leftside paper outline norounded nowrap full-height flex-0 box column jc-start'>
            <div className="box column full-width flex-0 small-gap">
                <h3 className='disable-guitters full-width flex-0'>PAGES</h3>

                <ul className='box column full-width jc-start small-gap'>
                    {links.map((link, idx) => {
                        if (link.visible.includes(role)) {
                            return (
                                <li className={`btn full-width flex-0 ${pathname === link.path ? "active" : ""}`} key={idx}>
                                    <Link
                                        href={link.path}
                                        className={`box jc-start small-gap nowrap`}
                                    >
                                        {buttonContent(link)}
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>

            <div className="box column full-width flex-0 small-gap">
                <h3 className='disable-guitters full-width flex-0'>OTHERS</h3>

                <ul className='box column full-width jc-start small-gap'>
                    {otherLinks.map((link, idx) => (
                        <li className="btn full-width flex-0" key={idx}>
                            {link.name === "logout" ? (
                                <button className='box jc-start small-gap icon nowrap'>
                                    {buttonContent(link)}
                                </button>
                            ) : (
                                <Link href={link.path} className='box jc-start small-gap nowrap'>
                                    {buttonContent(link)}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LeftSide

