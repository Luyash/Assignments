export default function StudentCard({ name, age, course, grade }) {
  return (
    <div className="border rounded-lg shadow-md p-4 w-72 bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Course:</strong> {course}
      </p>
      <p>
        <strong>Grade:</strong> {grade}
      </p>
    </div>
  );
}