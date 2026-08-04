# Student Card Project — Full Guide (from `create-next-app`)

This guide walks through building this small Next.js + Tailwind project from scratch, step by step, starting from creating the app.

---

## 1. Create the Next.js App

Open your terminal (PowerShell) and run:

```bash
npx create-next-app@latest student-card-app
```

You'll be asked a series of setup questions. Recommended answers for this project:

```
Would you like to use TypeScript?        No
Would you like to use ESLint?            Yes
Would you like to use Tailwind CSS?      Yes
Would you like to use `src/` directory?  No (either works)
Would you like to use App Router?        Yes
Would you like to customize the default import alias?  No
```

> Note: We chose **No** for TypeScript here since the components in this project are plain `.jsx`. If you pick "Yes" instead, Next.js sets up `.tsx` files and you'd need to add type annotations like in the earlier `StudentCard.tsx` version.

Once setup finishes:

```bash
cd student-card-app
npm run dev
```

Open `http://localhost:3000` in your browser to confirm it's running.

---

## 2. Project Structure

Your folder should look roughly like this:

```
student-card-app/
├── app/
│   ├── page.jsx        ← Home page (this is where <Home /> lives)
│   ├── layout.jsx
│   └── globals.css
├── public/
├── package.json
├── tailwind.config.js
└── ...
```

---

## 3. Create the Component Folder

Inside `app/`, create a new folder called `Component`, and inside it, create `StudentCard.jsx`:

```
app/
└── Component/
    └── StudentCard.jsx
```

### `app/Component/StudentCard.jsx`

```jsx
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
```

**What this does:**
- Exports a reusable component called `StudentCard`.
- Takes four props: `name`, `age`, `course`, `grade` — destructured directly in the function signature.
- Renders a styled card using Tailwind utility classes:
  - `border`, `rounded-lg`, `shadow-md` → card border, rounded corners, drop shadow
  - `p-4` → padding inside the card
  - `w-72` → fixed width
  - `bg-white` → white background
  - `text-black` → forces black text (useful if your global styles set a different default text color)
  - `text-xl font-bold mb-2` → larger, bold heading with spacing below

---

## 4. Build the Home Page

Replace the contents of `app/page.jsx` with:

```jsx
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
```

**What this does:**
- Imports `StudentCard` from the `Component` folder.
- Renders four `<StudentCard />` instances, each passed different `name`, `age`, `course`, and `grade` values as props.
- Wraps them in a `<main>` container styled with Tailwind:
  - `min-h-screen` → container fills at least the full screen height
  - `flex flex-wrap gap-6` → lays cards out in a row that wraps to new lines on smaller screens, with spacing between cards
  - `justify-center items-center` → centers the cards horizontally and vertically
  - `bg-gray-100` → light gray page background
  - `p-8` → padding around the whole page

---

## 5. Run It

```bash
npm run dev
```

Visit `http://localhost:3000` — you should see four student cards laid out in a centered, wrapping grid on a light gray background.

---

## 6. Key Concepts Recap

| Concept | Where it shows up | What it means |
|---|---|---|
| Component | `StudentCard.jsx` | A reusable function that returns UI |
| Props | `{ name, age, course, grade }` | Data passed into a component from its parent |
| Destructuring | `{ name, age, ... }` in the function signature | Unpacking object fields into individual variables |
| JSX | `<div className="...">` | HTML-like syntax inside JavaScript, compiled into JS |
| Tailwind classes | `className="border rounded-lg ..."` | Utility classes, each mapping to one CSS rule |
| `import` / `export default` | Top of both files | How components are shared between files |

---

## 7. Optional Next Steps

- Replace the hardcoded student data in `page.jsx` with an array + `.map()` so you're not repeating `<StudentCard />` manually for each student.
- Move student data into a separate `data.js` file or fetch it from an API.
- Add a search or filter input above the cards.