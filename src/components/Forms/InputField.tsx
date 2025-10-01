"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { SignUpSchema } from "@/lib/formValidation";

type InputFieldProps = {
  control: Control<SignUpSchema>;
  name: keyof SignUpSchema;
  label: string;
  placeholder?: string;
  type?: string;
};

const InputField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: InputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className="w-full"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
