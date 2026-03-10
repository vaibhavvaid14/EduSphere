import { useState } from "react";
import { useFeedback } from "../../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback } = useFeedback();

  const [form, setForm] = useState({
    course: "",
    rating: 5,
    comment: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFeedback({
      ...form,
      date: new Date()
    });

    setForm({ course: "", rating: 5, comment: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Submit Feedback</h2>

      <input
        type="text"
        placeholder="Course"
        value={form.course}
        onChange={(e) =>
          setForm({ ...form, course: e.target.value })
        }
        className="w-full border p-2 rounded"
      />

      <select
        value={form.rating}
        onChange={(e) =>
          setForm({ ...form, rating: Number(e.target.value) })
        }
        className="w-full border p-2 rounded"
      >
        {[1,2,3,4,5].map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <textarea
        placeholder="Comment"
        value={form.comment}
        onChange={(e) =>
          setForm({ ...form, comment: e.target.value })
        }
        className="w-full border p-2 rounded"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
