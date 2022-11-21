
const CourseData = ({name, description, credits}) => {

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <h4>credits: {credits}</h4>
        </div>
    )
}

export default CourseData