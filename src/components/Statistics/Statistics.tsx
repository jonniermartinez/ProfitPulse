import {
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  Bar,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useContext } from "react";
import { FormContext } from "@/context/formContext";

export default function Statistics() {
  const data = useContext(FormContext);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart width={500} height={300} data={data} stackOffset="expand">
        <Tooltip />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        {/* <Line
          type="monotone"
          dataKey="capital"
          stroke="#8884d8"
          strokeWidth={2}
        /> */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="year" />
        <YAxis type="number" domain={[0, "dataMax + 20"]} />
        {/* <Tooltip content={renderTooltipContent} /> */}
        <Line
          type="monotone"
          dataKey="finalBalance"
          stroke="#6366f1"
          fill="#efeffe"
          strokeWidth={4}
        />
        <Bar dataKey="capital" fill="#ec4899" barSize={40} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
