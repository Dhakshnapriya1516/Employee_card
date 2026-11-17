import "../Styles/EmployeeCard.css";
function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <div className="avatar">
        {employee.name.charAt(0)}
      </div>

      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <p>Department: {employee.department}</p>
      <p>Email: {employee.email}</p>

      <span className="status">
        {employee.status}
      </span>
    </div>
  );
}

export default EmployeeCard;