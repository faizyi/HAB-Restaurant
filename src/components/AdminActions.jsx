import React from 'react'
import { FiEdit, FiTrash } from 'react-icons/fi'
import { IsAdminHook } from '../CustomHooks/IsAdminHook'
export const AdminActions = ({id}) => {
    const { isAdminLoggedIn } = IsAdminHook();
    const handleDelete = () => {
      console.log(id);
    }
    return (
        <>
        {isAdminLoggedIn && (
        <div className="top-4 right-4 flex space-x-2">
          <button
            onClick={() => handleEdit(index)}
            className="bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600
             hover:shadow-lg transition"
          >
            <FiEdit />
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-3 rounded-full shadow hover:bg-red-600
             hover:shadow-lg transition"
          >
            <FiTrash />
          </button>
        </div>
      )}
        </>
    )
}
