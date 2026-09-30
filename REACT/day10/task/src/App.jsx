import { useState } from "react";

const App = () => {

  
  // task1
  

  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    city: ""
  });


  // task2

  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    role: "",
    salary: ""
  });

  const [submittedEmployee, setSubmittedEmployee] = useState(null);




  const handleChange = (event, setData) => {

    const name = event.target.name;
    const value = event.target.value;

    setData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };


  
  const handleStudentSubmit = (event) => {

    event.preventDefault();

    console.log("Student Object:", student);
  };




  const handleEmployeeSubmit = (event) => {

    event.preventDefault();


    setSubmittedEmployee(employee);


    setEmployee({
      employeeName: "",
      employeeId: "",
      department: "",
      role: "",
      salary: ""
    });
  };


  return (
    <div className="container">

      <h1>React Object Form</h1>


 

      <div className="form-card">

        <h2>Task 1 - Student Registration Form</h2>

        <form onSubmit={handleStudentSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={(event) =>
              handleChange(event, setStudent)
            }
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={student.email}
            onChange={(event) =>
              handleChange(event, setStudent)
            }
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={student.age}
            onChange={(event) =>
              handleChange(event, setStudent)
            }
          />

          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={student.course}
            onChange={(event) =>
              handleChange(event, setStudent)
            }
          />

          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={student.city}
            onChange={(event) =>
              handleChange(event, setStudent)
            }
          />

          <button type="submit">
            Register Student
          </button>

        </form>

      </div>


     

      <div className="form-card">

        <h2>Task 2 - Employee Details Form</h2>

        <form onSubmit={handleEmployeeSubmit}>

          <input
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={employee.employeeName}
            onChange={(event) =>
              handleChange(event, setEmployee)
            }
          />

          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={employee.employeeId}
            onChange={(event) =>
              handleChange(event, setEmployee)
            }
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={employee.department}
            onChange={(event) =>
              handleChange(event, setEmployee)
            }
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={employee.role}
            onChange={(event) =>
              handleChange(event, setEmployee)
            }
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={employee.salary}
            onChange={(event) =>
              handleChange(event, setEmployee)
            }
          />

          <button type="submit">
            Submit Employee
          </button>

        </form>


    

        {submittedEmployee && (
          <div className="result">

            <h3>Employee Details</h3>

            <p>
              <strong>Name:</strong>{" "}
              {submittedEmployee.employeeName}
            </p>

            <p>
              <strong>Employee ID:</strong>{" "}
              {submittedEmployee.employeeId}
            </p>

            <p>
              <strong>Department:</strong>{" "}
              {submittedEmployee.department}
            </p>

            <p>
              <strong>Role:</strong>{" "}
              {submittedEmployee.role}
            </p>

            <p>
              <strong>Salary:</strong>{" "}
              ₹{submittedEmployee.salary}
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default App;