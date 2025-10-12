"use client";

import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCardHoverEffect } from "@/components/includes/Theme/UseCardHover";
import AnimatedCounter from "@/components/includes/Dashboard/AnimatedCounter";

type SectionCardProps = {
  totalLendings: number;
  lentOut: number;
  returnedLends: number;
  overdue: number;
  loading: boolean;
};

export function SectionCards({
  totalLendings,
  lentOut,
  returnedLends,
  overdue,
  loading,
}: SectionCardProps) {
  useCardHoverEffect(".card");

  return (
    <div className="shadow-xs md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6">
      <Card className="@container/card card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Total Lends</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={totalLendings} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            All lends Made <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Total Lended Books</div>
        </CardFooter>
      </Card>
      <Card className="@container/card card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Lent Out</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={lentOut} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Currently Lended <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Active lends</div>
        </CardFooter>
      </Card>
      <Card className="@container/card card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Returned Lends</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={returnedLends} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Books Returned <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Total returned books</div>
        </CardFooter>
      </Card>
      <Card className="@container/ card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Overdue Lends</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={overdue} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Overdue Books <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Pending Returns in 7 days</div>
        </CardFooter>
      </Card>
    </div>
  );
}
