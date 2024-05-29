"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { GitBranchIcon, Github, LoaderIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import MessageError from "./message-error";
import Social from "./social";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await axios
      .post("/api/users/login", values)
      .then((res) => {
        router.push("/");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        {...field}
                        placeholder="name@example.com"
                        type="email"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="my-3" disabled={isLoading}>
              {isLoading && (
                <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Entrar
            </Button>
            {error && <MessageError message={error} />}
          </div>
        </form>
      </Form>
    </div>
  );
}

export default UserAuthForm;
