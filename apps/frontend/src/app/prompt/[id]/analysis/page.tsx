import { getPromptCompletenessMetrics } from "@/lib/network";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CustomPopover } from "@/components/common/custom-popover";
type Param = Promise<{ id: string }>;

export default async function Analysis({ params }: { params: Param }) {
  const { id } = await params;
  const { data } = await getPromptCompletenessMetrics(id);
  return (
    <div className="flex flex-1 flex-col p-2 gap-4 overflow-hidden">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-center md:text-left">
          Completeness
        </h1>
        <p className="text-sm text-center md:text-left">
          Evaluates how much of the prompt’s content is reflected in the
          response using the Prompt Coverage Ratio. Higher scores indicate more
          complete and focused answers.
        </p>
      </div>
      <Table className="overflow-hidden border rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Response</TableHead>
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead className="w-[120px] text-center">
              <CustomPopover trigger={<span>Score</span>}>
                <span>
                  Fraction of unique prompt tokens also found in the response.
                  Higher = more complete.
                </span>
              </CustomPopover>
            </TableHead>
            <TableHead className="w-[100px] text-center">
              <CustomPopover trigger={<span>P_size</span>}>
                <span>
                  Count of unique informative tokens extracted from the prompt
                  after cleaning.
                </span>
              </CustomPopover>
            </TableHead>
            <TableHead className="w-[100px] text-center">
              <CustomPopover trigger={<span>R_size</span>}>
                <span>
                  Count of unique informative tokens extracted from the response
                  after cleaning.
                </span>
              </CustomPopover>
            </TableHead>
            <TableHead className="w-[100px] text-center">
              <CustomPopover trigger={<span>overlap</span>}>
                <span>
                  Count of prompt tokens also present in the response
                  (intersection size).
                </span>
              </CustomPopover>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((completeness, index) => (
            <TableRow key={completeness.id}>
              <TableCell className="font-medium">
                <CustomPopover
                  trigger={
                    <div className="w-[200px] overflow-y-auto truncate">
                      {completeness.response}
                    </div>
                  }
                >
                  <span>{completeness.response}</span>
                </CustomPopover>
              </TableCell>
              <TableCell>{completeness.profile.profile_name}</TableCell>
              <TableCell className="text-center">
                {completeness.completeness[index].score}
              </TableCell>
              <TableCell className="text-center">
                {completeness.completeness[index].P_size}
              </TableCell>
              <TableCell className="text-center">
                {completeness.completeness[index].R_size}
              </TableCell>
              <TableCell className="text-center">
                {completeness.completeness[index].overlap}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
