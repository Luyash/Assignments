import StudentCard from "./Component/StudentCard.jsx";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-wrap gap-6 justify-center items-center bg-gray-100 p-8">
      <StudentCard
        name="Suyog Pant"
        age={20}
        course="BSc CSIT"
        grade="A"
      />

      <StudentCard
        name="Aryan Thapa"
        age={19}
        course="BCA"
        grade="A+"
      />

      <StudentCard
        name="Jeet Thapa"
        age={21}
        course="BIT"
        grade="B+"
      />

      <StudentCard
        name="Luyash Thapa"
        age={20}
        course="Computer Engineering"
        grade="A+"
      />
    </main>
  );
}