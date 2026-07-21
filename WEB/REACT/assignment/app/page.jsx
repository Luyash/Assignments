import StudentCard from "./Component/StudentCard.jsx";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-wrap gap-6 justify-center items-center bg-gray-100 p-8">
      <StudentCard
        name="John Doe"
        age={20}
        course="BSc CSIT"
        grade="A"
      />

      <StudentCard
        name="Jane Smith"
        age={19}
        course="BCA"
        grade="A+"
      />

      <StudentCard
        name="David Johnson"
        age={21}
        course="BIT"
        grade="B+"
      />

      <StudentCard
        name="Emily Brown"
        age={22}
        course="Computer Engineering"
        grade="A-"
      />
    </main>
  );
}