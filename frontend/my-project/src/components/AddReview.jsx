import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReview = () => {

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Review</h2>
      <form >
        <div className="mb-4">
          <label className="block text-sm font-medium">Game Cover URL</label>
          <input
            type="url"
            name="coverImage"
           
           
            className="w-full border px-4 py-2 rounded"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Game Title</label>
          <input
            type="text"
            name="title"
            
           
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Review Description</label>
          <textarea
            name="description"
           
           
            className="w-full border px-4 py-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Rating (1-10)</label>
          <input
            type="number"
            name="rating"
          
           
            className="w-full border px-4 py-2 rounded"
            min="1"
            max="10"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Publishing Year</label>
          <input
            type="number"
            name="year"
           
           
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g., 2023"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Genre</label>
          <select
            name="genre"
            
           
            className="w-full border px-4 py-2 rounded"
            required
          >
            <option value="">Select a genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">User Email</label>
          <input
            type="email"
            
            className="w-full border px-4 py-2 rounded bg-gray-100"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">User Name</label>
          <input
            type="text"
            
            className="w-full border px-4 py-2 rounded bg-gray-100"
            readOnly
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddReview;
