import Announcement from '@/components/Announcement'
import AttendanceChart from '@/components/AttendanceChart'
import CalendarCard from '@/components/Calendar'
import Card from '@/components/Card'
import CountChart from '@/components/CountCart'
import Event from '@/components/Event'
import FinanceChart from '@/components/FinanceChart'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const AdminPage = () => {
    return (
        <div className='rightside full-width box nowrap ai-start'>
            <div className="left-side scroller jc-start">
                <div className="box column">
                    <div className="cards-container box full-width">
                        {Array.from({ length: 4 }, (_ele, idx) => (
                            <Card key={idx} />
                        ))}
                    </div>
                    <div className="charts box jc-start ai-start full-width">
                        <div className="radial-chart">
                            <CountChart />
                        </div>
                        <div className="table-chart full-width">
                            <AttendanceChart />
                        </div>
                    </div>
                    <div className="charts box jc-start ai-start full-width">
                        <FinanceChart />
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

export default AdminPage