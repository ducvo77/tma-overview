import { Button } from "@mui/material";
import Container from "../components/Container";
import Header from "../components/Header";
import Section from "../components/Section";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementByAmount } from "../features/counter/counterSlice";

function About() {
  const { value }: any = useSelector(
    (state: { counter: number }) => state.counter
  );
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Container>
        <Section>
          <h2 className="text-center font-bold text-2xl">About Page!!</h2>
          <div className="text-center mt-10">
            <span className="text-2xl min-w-[2rem] p-2 border">
              {value || 0}
            </span>
            <div className="flex gap-5 justify-center mt-10">
              <Button variant="contained" onClick={() => dispatch(decrement())}>
                Giảm
              </Button>
              <Button
                variant="contained"
                onClick={() => dispatch(incrementByAmount(3))}
              >
                Tăng
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}

export default About;
