class FileSystem {
  readFile(path, callback) {
    setTimeout(() => {
      const usersTxt = JSON.stringify({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      });
      callback(usersTxt);
    }, 100);
  }
}

/**
 * Re-write the following with promise
 */
export const exercise04 = () => {
  const fs = new FileSystem();

  return new Promise((resolve, reject) => {
    fs.readFile("./users.txt", (content) => {
      resolve(JSON.parse(content));
    });
  });
};
