const app = require("./index");

const PORT = 8080;
app.listen(PORT, (e) => {
  if (e) throw e;

  console.log(`---------------------------------------------------------`);
  console.log(`|\t⚡ [SERVER]: Running on port ${PORT}               |`);
  console.log(`|\t🌍 [SERVER]: http://localhost:${PORT}              |`);
  console.log(`---------------------------------------------------------`);
});
