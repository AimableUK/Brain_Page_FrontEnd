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

interface SectionCardProps {
  loading: boolean;
  totalBooks: number;
  availableBooks: number;
  totalMembers: number;
  membersWithBooks: number;
}

export function SectionCards({
  loading,
  totalBooks,
  availableBooks,
  totalMembers,
  membersWithBooks,
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
          <CardDescription>Total Members</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={totalMembers} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Our Library Members <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Members in the system</div>
        </CardFooter>
      </Card>
      <Card className="@container/card card bg-gradient-to-t from-primary/5 to-card dark:bg-card ">
        <CardHeader className="relative">
          <CardDescription>Book Holders</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <AnimatedCounter num={membersWithBooks} />
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Members with books <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Currently with books</div>
        </CardFooter>
      </Card>
    </div>
  );
}
