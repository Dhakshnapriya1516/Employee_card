import EmployeeCard from "./EmployeeCard";
import employees from "../data/employee_details"; 
import "../Styles/EmployeeList.css";

function EmployeeList() {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

export default EmployeeList;