import React from 'react'

const AuthorCard = ({ author }) => {
  return (
    <div className="bg-white bg-opacity-70 w-80 h-10 fixed bottom-14">
      <p className="text-gray-600 text-center mt-2 rounded-lg max-w-md">Fuente: {author}</p>
    </div>
  );
};

export default AuthorCard