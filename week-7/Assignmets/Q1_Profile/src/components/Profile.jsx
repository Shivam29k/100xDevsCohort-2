import profileImg from '../assets/profile.jpg'

export function Profile() {
    return (
        <>
            <div className="upperDiv"></div>
            <img className="profileImg" src={profileImg} alt="" />
            <div className="lowerDiv">
                <div>
                    <p><b>Shivam Kumar</b></p>
                    <p>20</p>
                </div>
                <div className="location">Punjab</div>
            </div>
        </>
    )
}