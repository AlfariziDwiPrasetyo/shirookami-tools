import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRightIcon } from "lucide-react";

type CardToolsProps = {
  title: string;
  link: string;
  description: string;
  status: string;
};

export function CardTools({
  title,
  link,
  status,
  description,
}: CardToolsProps) {
  return (
    <>
      {status == "done" ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <a className="flex items-center hover:text-gray-600" href={link}>
              Go
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </a>
          </CardFooter>
        </Card>
      ) : (
        <div className="relative w-full">
          <Card className="filter blur-sm">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <a href={link} className="pointer-events-none">
                Go
              </a>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </CardFooter>
          </Card>
          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-semibold text-muted-foreground">
              Working on it 🔨
            </span>
          </div>
        </div>
      )}
    </>
  );
}
