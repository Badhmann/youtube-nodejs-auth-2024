//badhmann64  iVJL4WMJaisbFw7i
//

require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoutes = require("./routes/home-route");
const adminRoutes = require("./routes/admin-route");
const uploadImageRoutes = require("./routes/image-route");

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", uploadImageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});