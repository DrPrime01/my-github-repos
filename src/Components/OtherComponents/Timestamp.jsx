import moment from "moment";

function Timestamp ({timeStamp}) {
    const timeString = moment(timeStamp).fromNow();
    return (
        <div className="time">
            {timeString}
        </div>
    )
}

export default Timestamp;