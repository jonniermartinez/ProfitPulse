import { createContext } from "react";

interface Data {
  year?: number;
  initialBalance?: string;
  finalBalance?: string;
  interesGanado?: string;
  capital?: number;
}
type Form = Data;
type FormContextType = Data[];

export const FormContext = createContext<FormContextType>([]);

export const FormFieldsContext = createContext<Form>({});

console.log("conteaxt");
console.log(FormContext);
