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
  loading: boolean;
  totalBooks: number;
  availableBooks: number;
  lentBooks: number;
  overDueBooks: number;
};

export function SectionCards({
  loading,
  totalBooks,
  availableBooks,
  lentBooks,
  overDueBooks,
}: SectionCardProps) {
  useCardHoverEffect(".card");

  return (
    <div className="shadow-xs md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6">
      <Card className="@container/card card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Total Books</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={totalBooks} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            All Books in library <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Total Books in the system</div>
        </CardFooter>
      </Card>
      <Card className="@container/card card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Available Books</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={availableBooks} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Available Books <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Currently available Books</div>
        </CardFooter>
      </Card>
      <Card className="@container/card card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Lent Books</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={lentBooks} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Books Lent <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Books lent to members</div>
        </CardFooter>
      </Card>
      <Card className="@container/ card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Overdue Books</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={overDueBooks} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            All Overdue <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Books which are Overdue</div>
        </CardFooter>
      </Card>
    </div>
  );
}
