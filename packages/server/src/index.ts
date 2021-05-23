import { app, env } from "./frameworks/config";

app.listen(env.port, () =>
  console.log(`Server running at http://localhost:${env.port.toString()}`)
);
