import express from "express";

const app = express();

const port = 4000;

interface Dog {
  name: string;
  breed: "labrador" | "german shepherd" | "golden retriever";
  adopted_at: Date | null;
  birth_date: Date | null;
}

app.get<
  {},
  { data: Dog[]; message: string },
  {},
  {
    page: number;
    limit: number;
    breed: "labrador" | "german shepherd" | "golden retriever";
  }
>("/api/v1/dogs", (req, res) => {
  // your implementation
  res.send({
    data: [
      { name: "Rodi", breed: "labrador", adopted_at: null, birth_date: null },
    ],
    message: "All dogs",
  });
});

app.get<{ id: number }, { data: Dog | null; message: string }, {}>(
  "/api/v1/dogs/:id",
  (req, res) => {
    // your implementation
    res.send({
      data: {
        name: "Misa",
        breed: "german shepherd",
        adopted_at: null,
        birth_date: null,
      },
      message: "Dog find",
    });
  }
);

app.post<{}, { data: Dog & { id: number }; message: string }, Dog, {}>(
  "/api/v1/dogs",
  (req, res) => {
    // your implementation
    res.send({
      data: {
        name: "Misa",
        breed: "german shepherd",
        adopted_at: null,
        birth_date: null,
        id: 1,
      },
      message: "Dog one",
    });
  }
);

app.put<
  { id: number },
  { data: Dog & { id: number }; message: string },
  Partial<Dog>,
  {}
>("/api/v1/dogs", (req, res) => {
  // your implementation
  res.send({
    data: {
      name: "Rocko",
      breed: "german shepherd",
      adopted_at: null,
      birth_date: null,
      id: 2,
    },
    message: "Dog update",
  });
});

app.delete<
  { id: number },
  { data: Dog & { id: number }; message: string },
  {},
  {}
>("/api/v1/dogs", (req, res) => {
  // your implementation
  res.send({
    data: {
      name: "Rocko",
      breed: "german shepherd",
      adopted_at: null,
      birth_date: null,
      id: 2,
    },
    message: "Dog update",
  });
});

app.listen(port, () => {
  console.log(`API Dogs listening on port ${port}`);
});
