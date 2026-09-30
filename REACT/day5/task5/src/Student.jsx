const Student = () => {
  const studentName = "Bhuvi";
  const age = 22;
  const course = "React";
  const isActive = true;
  const fees = 15000;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-5">
          Student Details
        </h2>

        <p className="mb-2">Student Name: {studentName}</p>
        <p className="mb-2">Age: {age}</p>
        <p className="mb-2">Course: {course}</p>

        <p className="mb-2">
          Status: {isActive ? "Active" : "Inactive"}
        </p>

        <p>Fees: {fees}</p>
      </div>
    </div>
  );
};

export default Student;