import React from 'react';

function Showdata({users}){
    return(
        
   
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          User List
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
            >
                  <img src="{user.photos}"></img>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {user.name}
              </h2>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {user.email}
              </p>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Username:</span> {user.username}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Company:</span>{" "}
                {user.company?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}
export default Showdata;
