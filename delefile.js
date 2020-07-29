const fs = require('fs');
const path = require('path');

const deleteFile = (id, username) => {
  try {
    fs.unlinkSync(path.resolve(__dirname, `./new-directory-name/user.json${username}/${id}.txt`));
    return {
      status: 200,
      message: `File ${id}.txt deleted successfully`,
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

deleteFile(id, username);