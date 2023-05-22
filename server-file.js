app.get("/files", async (req, res, next) => {

  try {
    const connection = await mongoClient.connect(URL);

    const db = connection.db(DB);

    const data = await db
      .collection("articles")
      .find({ year: +req.query.year, issue: +req.query.issue}).toArray();

    await connection.close();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "try again later" });
  }
});
