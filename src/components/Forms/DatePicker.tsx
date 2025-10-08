"use client";

import * as React from "react";
import { parseDate } from "chrono-node";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const DatePicker = ({
  value,
  onChange,
  title,
  helperText,
  defaultValue,
}: {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  title?: string;
  helperText: string;
  defaultValue?: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState(
    value
      ? formatDate(value)
      : defaultValue
      ? new Date(defaultValue).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : ""
  );
  const [month, setMonth] = React.useState<Date | undefined>(value);

  const handleInput = (val: string) => {
    setTextValue(val);
    if (val.trim() === "") {
      onChange?.(undefined);
      return;
    }
    const parsed = parseDate(val);
    if (parsed) {
      onChange?.(parsed);
      setMonth(parsed);
    }
  };

  React.useEffect(() => {
    setTextValue(value ? formatDate(value) : "");
  }, [value]);

  return (
    <div className="flex flex-col gap-1">
      <Label>{title}</Label>
      <div className="relative flex gap-2">
        <Input
          placeholder="Tomorrow or next week"
          value={textValue}
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className="bg-background pr-10"
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2 py-4 mr-1"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={value}
              month={month}
              captionLayout="dropdown"
              onMonthChange={setMonth}
              onSelect={(date) => {
                onChange?.(date as Date);
                setOpen(false);
              }}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="text-muted-foreground px-1 text-sm">
        {value && helperText}{" "}
        <span className="font-medium">{value ? formatDate(value) : ""}</span>
      </div>
    </div>
  );
};

export default DatePicker;
