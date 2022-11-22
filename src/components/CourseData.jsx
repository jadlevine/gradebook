
const CourseData = ({name, description, creditHours}) => {

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <h4>credits: {creditHours}</h4>
        </div>
    )
}

export default CourseData