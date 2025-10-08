import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronLast } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const OnBoarding = () => {
  return (
    <Card className="card bg-gradient-to-t from-primary/5 to-card dark:bg-card">
      <CardHeader className="relative">
        <div className="flex flex-row justify-between items-center mb-3">
          <CardTitle>
            Hi Mugisha, Please finish setting up your profile
          </CardTitle>
          <div className="flex flex-row gap-x-2">
            <Badge variant="secondary">63% complete</Badge>
            <Badge>Edit</Badge>
            <Tooltip>
              <TooltipTrigger asChild>
                <ChevronLast className="border-2 rounded-md p-1" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Dismiss</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <Progress value={63} />
      </CardHeader>
    </Card>
  );
};

export default OnBoarding;
