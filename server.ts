import app from "./app";
import { connectDatabase } from "./config/db";

const PORT = 8000;

connectDatabase();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})