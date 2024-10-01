import Announcement from '@/components/Announcement'
import CalendarCard from '@/components/Calendar'
import Event from '@/components/Event'
import SwitchBtn from '@/components/SwitchBtn'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const StudentPage = () => {
    return (
        <div className='rightside full-width box nowrap ai-start'>
            <div className="left-side scroller jc-start">
                <div className="schedule paper box column outline">
                    <div className="schedule-header box full-width small-gap">
                        <h2>Schedule (A4)</h2>
                        <div className="box">
                            <span className='small'>Tusday Oct 1</span>
                            <SwitchBtn />
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-side scroller hide-in-small">
                <div className='wrapper box column nowrap jc-start'>
                    <CalendarCard />
                    <div className="box column events small-gap">
                        <div className="events-header box full-width">
                            <h2 className='full-width disable-guitters flex-0'>Events</h2>
                            <button className="icon">
                                <BsThreeDotsVertical />
                            </button>
                        </div>
                        <div className="events-body box column full-width small-gap">
                            <Event />
                            <Event />
                            <Event />
                        </div>
                    </div>
                    <div className="box column announcements small-gap">
                        <div className="announcements-header box full-width">
                            <h2 className='full-width disable-guitters flex-0'>Announcements</h2>
                            <button className="icon">
                                View All
                            </button>
                        </div>
                        <div className="announcements-body box column full-width small-gap">
                            <Announcement />
                            <Announcement />
                            <Announcement />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentPage