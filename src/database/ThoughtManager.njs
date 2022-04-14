import Logger from "../utils/Logger";
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
    } catch (error) {
      Logger.log("error", error);
    }
  }

  async getThought(id) {
    try {
      return await ThoughtModel.findById(id);
    } catch (error) {
      Logger.log("error", error);
    }
  }

  async updateById(id, data, development) {
    try {
      await ThoughtModel.findByIdAndUpdate(id, data);
      if (development) {
        Logger.log(
          "info",
          `Updated object by ID '${id}': ` + JSON.stringify(data)
        );
      }
    } catch (error) {
      Logger.log("error", error);
    }
  }

  async deleteThought(id) {
    try {
      await ThoughtModel.findByIdAndDelete(id);
    } catch (error) {
      Logger.log("error", error);
    }
  }
}

export default new ThoughtManager();
