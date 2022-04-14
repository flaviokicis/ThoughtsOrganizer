import Logger from "../utils/logger";
import ThoughtModel from "./models/ThoughtModel";

class ThoughtManager {
  async createNewThought(title, theme, momentObject, development) {
    try {
      const res = await ThoughtModel.create({
        title,
        theme,
        ...(momentObject.isValid() && { due: momentObject.valueOf() }),
      });

      if (development) {
        Logger.log("info", "Created object: " + JSON.stringify(res));
      }
    } catch (error) {
      Logger.log("error", error);
    }
  }

  async loadAllThoughts() {
    try {
      return await ThoughtModel.find({});
    } catch (error) {}
  }
}

export default new ThoughtManager();
