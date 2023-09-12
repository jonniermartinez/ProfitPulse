import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  label: string;
  name: string;
  simbol?: string;
  infoHelp?: boolean;
  placeholder: string;
}

function Question({
  label,
  placeholder,
  simbol,
  infoHelp = true,
  name,
}: Props) {
  return (
    <div className="text-start flex flex-col gap-2">
      <div className="flex items-center w-full justify-between">
        <Label>{label}</Label>
        {infoHelp ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="#222b2a"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"></path>
          </svg>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center gap-2">
        {simbol ? <span className="font-bold text-xl ">{simbol}</span> : ""}
        <Input type="number" name={name} placeholder={placeholder}></Input>
      </div>
    </div>
  );
}
export default Question;
