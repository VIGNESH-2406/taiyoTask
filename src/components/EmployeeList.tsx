import { IEmployee } from "./Employee.Type";

// import EmployeeModal from "./EmployeeModal";
import React from "react";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  // const [showModal, setShowModal] = useState(false);
  // const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  // const viewEmployee = (data: IEmployee) => {
  //   setDataToShow(data);
  //   // setShowModal(true);
  // };

  // const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-28 py-4 ml-20 ">
        {list.map((item) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2">{item.firstName}</div>
              <p className="text-gray-700 text-base mb-2">{item.lastName}</p>

              <button
                onClick={() => onEdit(item)}
                className="bg-blue-600 cursor-pointer h-8 w-24 rounded-lg  text-white ml-2 shadow-lg"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteClickHnd(item)}
                className="bg-red-400 cursor-pointer h-8 w-24 rounded-lg  text-white ml-2 shadow-lg"
              >
                Delete
              </button>

              <div className=" flex row  ">
                <h3 className="  text-lg  text-blue-900 font-semibold ml-2 mt-6">
                  Status:-
                </h3>
                <div className="grid mt-2">
                  <input
                    className="mt-3 ml-4"
                    type="radio"
                    checked={item.isActive}
                  />
                </div>
                <div className=" ml-2">
                  {item.isActive ? (
                    <p className="  text-sm font-medium  text-blue-900  ml-2 mt-6">
                      Active
                    </p>
                  ) : (
                    <p className="  text-sm font-medium text-blue-900  ml-2 mt-6">
                      Inactive
                    </p>
                  )}
                </div>
              </div>
              {/* <p className="text-gray-700 text-base">{item.phone}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* <article>
        <h3 className="list-header">Employee List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(employee)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(employee)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table> */}
      {/* {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )} */}
    </div>
  );
};

export default EmployeeList;
