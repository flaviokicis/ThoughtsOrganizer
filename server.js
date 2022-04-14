import Nullstack from "nullstack";
import Application from "./src/Application";
import { connectToDatabase } from "./src/database/MongoConnection";

const context = Nullstack.start(Application);

context.start = async function start() {
  // Connect to MongoDB and set it in the context
  const { secrets } = context;
  context.database = await connectToDatabase(secrets.mongodbUrl);
};

export default context;
