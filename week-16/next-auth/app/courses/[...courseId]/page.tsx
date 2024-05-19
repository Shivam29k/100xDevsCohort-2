export default function ({params}: { params: { courseId: string[] } }) {
    console.log(params.courseId)
  return <div>Course Page {params.courseId}</div>;
}
