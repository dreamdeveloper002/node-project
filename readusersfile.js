const fs = require('fs');
const path = require('path');

const readFile = function (id, username) {
  try {
    const dataBuffer = fs.readFileSync(path.resolve(__dirname, `./new-directory-name/user.json${username}/${id}.txt`));
    const data = dataBuffer.toString();
    return {
      status: 200,
      data: {
        file: {
          id: `${id}.txt`,
          data,
        }
      },
    };
  } catch (err) {
    if (err.code === 'ENOENT') return {
      status: 404,
      message: err.message,
    };
    return {
      status: 500,
      message: err.message,
    };
  }
};

readFile(id, username)