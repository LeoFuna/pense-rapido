import { io } from "socket.io-client";

const client = io("http://localhost:3002");

export default client;