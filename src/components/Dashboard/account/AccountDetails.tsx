import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CalendarDays, Mail, Phone, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const AccountDetails = () => {
  return (
    <Card className="card bg-gradient-to-t from-primary/5 to-card dark:bg-card border p-3 rounded-lg flex flex-col col-span-4 w-full">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center gap-x-3">
          <Image
            src="/brainpage.png"
            alt="user image"
            width={100}
            height={100}
            className="rounded-xl border"
          />
          <div className="flex flex-col justify-start">
            <h2 className="my-2 font-semibold">Mugisha Claude</h2>
            <Badge
              variant="secondary"
              className="bg-secondary flex flex-row items-center w-fit justify-center gap-1 hover:bg-accent transition-all duration-100 ease-in"
            >
              <User width={15} />
              Librarian
            </Badge>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-1">
          <h3 className="flex flex-row whitespace-nowrap items-center font-medium gap-1">
            <Mail size={18} />
            mugisha@gmail.com
          </h3>
          <h3 className="flex flex-row whitespace-nowrap items-center font-medium gap-1">
            <Phone size={18} />
            0783309468
          </h3>
          <h3 className="flex flex-row whitespace-nowrap items-center font-medium gap-1">
            <CalendarDays size={18} />
            Joined 5/7/2025
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default AccountDetails;
