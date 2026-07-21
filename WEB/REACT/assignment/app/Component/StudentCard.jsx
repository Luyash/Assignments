export default function StudentCard({ name, age, course, grade }) {
  return (
    <div className="border rounded-lg shadow-md p-4 w-72 bg-white">
      <h2 className="text-xl font-bold mb-2 text-black">{name}</h2>
      <p className="text-black">
        <strong>Age:</strong> {age}
      </p>
      <p className="text-black">
        <strong>Course:</strong> {course}
      </p>
      <p className="text-black">
        <strong>Grade:</strong> {grade}
      </p>
    </div>
  );
}