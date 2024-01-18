import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Please enter your full name",
  }),
  email: z.string().email({
    message: "Must be a valid email address",
  }),
  phone: z.string().min(10, {
    message: "Please make sure you include your area code",
  }),
  message: z.string().min(1, {
    message: "Message field cannot be empty",
  }),
});

export default function ContactForm() {
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSendingEmail(true);

    await emailjs
      .send("service_n4ju0hr", "template_ahyqx1g", values, "6g0rq8vN720O74Ji5")
      .then(
        (result) => {
          if (result.text === "OK") {
            toast({
              title: "Message Sent Successfully!",
              description: "Thank you! We will respond as soon as possible!",
            });
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    setSendingEmail(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-8 space-y-8 border-y-2 border-grayDark py-8 font-standard text-grayDark"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-base">Full Name</FormLabel>
              <FormControl>
                <Input
                  className="md:text-base"
                  placeholder="Jane Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage className="border-b-2 border-errorColor pb-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-base">Email</FormLabel>
              <FormControl>
                <Input
                  className="md:text-base"
                  placeholder="jane@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="border-b-2 border-errorColor pb-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-base">Phone</FormLabel>
              <FormControl>
                <Input
                  className="md:text-base"
                  placeholder="530 555 1234"
                  {...field}
                />
              </FormControl>
              <FormMessage className="border-b-2 border-errorColor pb-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-base">Message</FormLabel>
              <FormControl>
                <Textarea
                  className="md:text-base"
                  placeholder="How can we help? ..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="border-b-2 border-errorColor pb-2" />
            </FormItem>
          )}
        />
        <FormDescription className="text-center text-grayDark opacity-80 md:text-base">
          This form will directly email us.
        </FormDescription>
        {sendingEmail ? (
          <Button
            disabled
            className="w-full bg-grayDark text-whiteLight md:text-base"
          >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait...
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full bg-grayDark text-whiteLight md:text-base"
          >
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}
