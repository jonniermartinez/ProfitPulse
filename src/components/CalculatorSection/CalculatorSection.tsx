import { FormContext } from "@/context/formContext";
import { useState } from "react";
import { Button } from "../ui/button";
import Question from "../Question/Question";
import calculator from "../Calcualtor/Calculator";

import Statistics from "../Statistics/Statistics";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Data {
  year: number;
  initialBalance: string;
  finalBalance: string;
  interesGanado: string;
  capital: number;
}

function CalculatorSection() {
  const [data, setData] = useState(Array<Data>);

  const handleSubmit = (e) => {
    e.preventDefault();
    const initialAmmount = Number(e.target.initialAmmount.value);
    const yearlyPercentage = Number(e.target.yearlyPercentage.value);
    const years = Number(e.target.years.value);
    const operacion = calculator(initialAmmount, yearlyPercentage, years);
    setData(operacion);
  };

  return (
    <section
      className="mx-auto max-w-screen-xl text-center min-h-screen"
      id="calculator"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight transition-colors first:mt-0">
          Harness the Power of Compound Interest with Our Calculator
        </h2>
        <p className="leading-7 max-w-3xl text-gray-500  mx-auto [&:not(:first-child)]:mt-6">
          Curious about how your investments can grow over time? Our Compound
          Interest Calculator provides the answers you need. Input your data and
          visualize how your money multiplies with the magic of compound
          interest. Take control of your finances today and chart your path to
          wealth!
        </p>
      </div>
      <FormContext.Provider value={data}>
        <div className="mx-auto flex items-center mt-14 justify-center flex-wrap gap-20 ">
          <form
            className=" md:w-2/5  w-full flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="mx-auto w-2/3 flex flex-col gap-10">
              <Question
                placeholder="100"
                label="Initial ammount"
                name="initialAmmount"
                simbol="$"
                infoHelp={false}
              />
              {/* <Question
                label="Annual Contribution"
                name="annualContribution"
                infoHelp={false}
                simbol="$"
              ></Question> */}
              <Question
                placeholder="12"
                label="Yearly Percentage"
                name="yearlyPercentage"
                simbol="%"
                infoHelp={false}
              ></Question>
              <Question
                placeholder="15"
                label="Number of years"
                name="years"
                infoHelp={false}
              ></Question>
              <Button className="">Calculate</Button>
            </div>
          </form>
          <div className=" w-11/12 md:w-2/5 h-96">
            <Statistics></Statistics>
          </div>
        </div>
        <div className="md:w-1/2 mx-auto mt-20">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Initial Capital</TableHead>
                <TableHead className="text-center">Year</TableHead>
                <TableHead className="text-center">FinalBalance</TableHead>
                <TableHead className="text-center">Interest gained</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((element) => {
                return (
                  <TableRow>
                    <TableCell className="font-medium">
                      {element.capital}
                    </TableCell>
                    <TableCell>{element.year}</TableCell>
                    <TableCell>{element.finalBalance}</TableCell>
                    <TableCell>{element.interesGanado}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </FormContext.Provider>
    </section>
  );
}
export default CalculatorSection;
