"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  useForm,
  UseFormReturn,
  SubmitHandler,
  FieldValues,
  Path,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CONTACT_FIELD_NAMES, FIELD_NAMES } from "@/app/constants";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import ImageUpload from "./ImageUpload";
import { Card } from "./ui/card";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit?: (data: T) => Promise<{ success: boolean; error?: string }>;
}

const ContactForm = <T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const router = useRouter();

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    // const result = await onSubmit(data);
    // if (result.success) {
    //   router.push("/thank-you");
    // } else {
    //   toast({
    //     title: `Error`,
    //     description: result.error ?? "An error occurred.",
    //     variant: "destructive",
    //   });
  };

  return (
    <Card className=" bg-white shadow-xl border-black/10 px-5 mt-8">
      <Form {...form}>
        <form onSubmit={() => {}} className="">
          <div className="grid grid-cols-2 gap-5">
            {Object.keys(defaultValues).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as Path<T>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      {
                        CONTACT_FIELD_NAMES[
                          field.name as keyof typeof CONTACT_FIELD_NAMES
                        ]
                      }
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        type={
                          CONTACT_FIELD_NAMES[
                            field.name as keyof typeof CONTACT_FIELD_NAMES
                          ]
                        }
                        placeholder={
                          CONTACT_FIELD_NAMES[
                            field.name as keyof typeof CONTACT_FIELD_NAMES
                          ]
                        }
                        {...field}
                        className="border-black/10 py-5"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <Button type="submit" className="form-btn cursor-pointer">
            Send Message
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;
