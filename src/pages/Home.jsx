import { Button, TextField } from "@mui/material";
import Container from "../components/Container";
import Header from "../components/Header";
import Section from "../components/Section";
import { useCallback, useState } from "react";

function Home() {
  const [workLists, setWorkLists] = useState([]);
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const handleSubmit = useCallback(() => {
    if (valueTitle && valueDescription) {
      setWorkLists([
        ...workLists,
        {
          title: valueTitle,
          description: valueDescription,
        },
      ]);
      setValueTitle("");
      setValueDescription("");
    }
  }, [workLists, valueTitle, valueDescription]);

  const handleDelete = useCallback(
    (index) => {
      const array = workLists.filter((work, index2) => index !== index2);
      setWorkLists(array);
    },
    [workLists]
  );

  return (
    <>
      <Header />
      <Container>
        <Section>
          <div className="flex items-center flex-col gap-2">
            <h2 className="text-2xl font-bold my-2">TODO APP!!</h2>
            <div className="flex flex-col gap-6">
              <TextField
                id="outlined-basic"
                label="Title"
                required
                variant="outlined"
                value={valueTitle}
                onChange={(e) => setValueTitle(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Description"
                required
                variant="outlined"
                value={valueDescription}
                onChange={(e) => setValueDescription(e.target.value)}
              />
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
            <ul className="border min-w-[16rem] flex flex-col mt-10">
              {workLists.map((work, index) => (
                <li
                  key={`work-${index}`}
                  className="cursor-pointer hover:bg-slate-200 p-2 relative flex items-center"
                >
                  <span>{work.title}</span>
                  <span
                    className="absolute right-2 p-2"
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </Container>
    </>
  );
}

export default Home;
