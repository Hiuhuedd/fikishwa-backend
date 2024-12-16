import http from "http";
import { app } from "./app";
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
// create server
server.listen(PORT, () => {
  console.log(`Server is connected with port ${PORT}`);
});
