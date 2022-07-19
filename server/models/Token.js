const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        refreshToken: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

module.export = model("Token", schema);
