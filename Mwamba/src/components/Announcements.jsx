
function Announcements() {
    return (
        <div className="announcements">
            <br />
            <h2>Announcements <i className="fas fa-bell"></i></h2>

            <div className="events">
                <div className="board">
                    <h1>Notice Board</h1>

                    <div className="board-card">
                        <li>Term Opening dates</li>

                        <li>Examination Announcements</li>

                        <li>Parent Meeting</li>

                        <li>School Activitis</li>
                    </div>
                </div>

                <div className="board">
                    <h1>Upcoming Events</h1>
                    <div className="board-card">
                        <li>Examination</li>
                        <li>Music Festival</li>
                        <li>Rehersals</li>
                        <li>Upcoming events</li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Announcements;