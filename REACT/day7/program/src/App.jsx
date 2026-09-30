const App = () => {



  // Task 1 
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C"
  ];

  // Task 2 
  const cities = [
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Coimbatore"
  ];

  // Task 3 
  const courses = [
    "Full Stack Development",
    "MERN Stack",
    "Java Development",
    "Python Development",
    "Data Science"
  ];


  // Task 1 - 
  const student = {
    name: "Bhuvanesh",
    age: 21,
    course: "BSc Physics",
    city: "Chennai"
  };

  // Task 2 - 
  const employee = {
    name: "Arun",
    role: "Software Developer",
    salary: 45000,
    location: "Chennai"
  };

  // Task 3 - 
  const product = {
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    brand: "Dell"
  };


 

  // Task 1 
  const students = [
    {
      id: 1,
      name: "Bhuvanesh",
      age: 21,
      course: "MERN Stack"
    },
    {
      id: 2,
      name: "Rahul",
      age: 22,
      course: "Java"
    },
    {
      id: 3,
      name: "Karthik",
      age: 20,
      course: "Python"
    },
    {
      id: 4,
      name: "Vijay",
      age: 23,
      course: "Full Stack"
    }
  ];

  // Task 2 
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories"
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Smart Watch",
      price: 5000,
      category: "Wearable"
    }
  ];

  // Task 3
  const employees = [
    {
      id: 1,
      name: "Arun",
      department: "IT",
      salary: 45000
    },
    {
      id: 2,
      name: "Kumar",
      department: "HR",
      salary: 40000
    },
    {
      id: 3,
      name: "Priya",
      department: "Finance",
      salary: 50000
    },
    {
      id: 4,
      name: "Divya",
      department: "Marketing",
      salary: 42000
    }
  ];


  return (
    <div className="container">

      <h1 className="main-title">
        React Rendering Tasks
      </h1>




      
      <section className="section">
        <h2>1. Array Rendering - Task 1</h2>

        <h3>Programming Languages</h3>

        <ul>
          {languages.map((language) => (
            <li key={language}>
              {language}
            </li>
          ))}
        </ul>
      </section>


    
      <section className="section">
        <h2>Array Rendering - Task 2</h2>

        <h3>Cities</h3>

        {cities.map((city) => (
          <p key={city} className="city">
            {city}
          </p>
        ))}
      </section>


      
      <section className="section">
        <h2>Array Rendering - Task 3</h2>

        <h3>Available Courses</h3>

        <div className="grid">
          {courses.map((course) => (
            <div className="card" key={course}>
              <h4>{course}</h4>
            </div>
          ))}
        </div>
      </section>


    
      <section className="section">
        <h2>2. Object Rendering - Task 1</h2>

        <div className="card">
          <p>
            <strong>Name:</strong> {student.name}
          </p>

          <p>
            <strong>Age:</strong> {student.age}
          </p>

          <p>
            <strong>Course:</strong> {student.course}
          </p>

          <p>
            <strong>City:</strong> {student.city}
          </p>
        </div>
      </section>


      
      <section className="section">
        <h2>Object Rendering - Task 2</h2>

        <h3>Employee Details</h3>

        <div className="card">
          <p>
            <strong>Name:</strong> {employee.name}
          </p>

          <p>
            <strong>Role:</strong> {employee.role}
          </p>

          <p>
            <strong>Salary:</strong> ₹{employee.salary}
          </p>

          <p>
            <strong>Location:</strong> {employee.location}
          </p>
        </div>
      </section>


    
      <section className="section">
        <h2>Object Rendering - Task 3</h2>

        <div className="card">
          <p>
            <strong>Product:</strong> {product.name}
          </p>

          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
        </div>
      </section>



      
      <section className="section">
        <h2>3. Array of Objects - Task 1</h2>

        <h3>Students</h3>

        <div className="grid">

          {students.map((student) => (
            <div className="card" key={student.id}>

              <p>
                <strong>ID:</strong> {student.id}
              </p>

              <p>
                <strong>Name:</strong> {student.name}
              </p>

              <p>
                <strong>Age:</strong> {student.age}
              </p>

              <p>
                <strong>Course:</strong> {student.course}
              </p>

            </div>
          ))}

        </div>
      </section>


      
      <section className="section">
        <h2>Array of Objects - Task 2</h2>

        <h3>Products</h3>

        <div className="grid">

          {products.map((product) => (
            <div className="card" key={product.id}>

              <h4>{product.name}</h4>

              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

            </div>
          ))}

        </div>
      </section>


    
      <section className="section">
        <h2>Array of Objects - Task 3</h2>

        <h3>Employees</h3>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>

            <tbody>

              {employees.map((employee) => (
                <tr key={employee.id}>

                  <td>{employee.id}</td>

                  <td>{employee.name}</td>

                  <td>{employee.department}</td>

                  <td>₹{employee.salary}</td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </section>


    </div>
  );
};

export default App;