import profileImg from '../assets/profile.jpg'

export function Profile() {
    return (
        <>
            <div className="upperDiv"></div>
            <img className="profileImg" src={profileImg} alt="" />
            <div className="lowerDiv">
                <h3>Shivam Kumar</h3>
                <p>20</p>
                <div className="location">Punjab</div>
            </div>
        </>
    )
}