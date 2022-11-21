
const StudentData = ({name, email, gpa}) => {

    return(<div>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <h3>{email}</h3>
        </div>
        <div>
            <h4>{gpa}</h4>
        </div>
    </div>)
}

export default StudentData