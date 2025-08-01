"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Meno musí mať aspoň 2 znaky"),
  email: z.string().email("Neplatný email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Správa musí mať aspoň 10 znakov"),
  captcha: z.string().refine((val) => val === "bam2024", "Nesprávna captcha"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Správa bola úspešne odoslaná!",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Chyba pri odosielaní správy",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Chyba pri odosielaní správy",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Meno */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Meno *
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Vaše meno"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="vas@email.sk"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Telefón */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefón
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent"
          placeholder="+421 901 234 567"
        />
      </div>

      {/* Správa */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Správa *
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Napíšte nám vašu správu..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Captcha */}
      <div>
        <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-2">
          Captcha *
        </label>
        <div className="bg-gray-50 p-4 rounded-lg mb-3">
          <p className="text-sm text-gray-600 mb-2">
            Pre overenie, že ste človek, napíšte: <strong>bam2024</strong>
          </p>
        </div>
        <input
          type="text"
          id="captcha"
          {...register("captcha")}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent ${
            errors.captcha ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="bam2024"
        />
        {errors.captcha && (
          <p className="mt-1 text-sm text-red-600">{errors.captcha.message}</p>
        )}
      </div>

      {/* Status správy */}
      {submitStatus && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Odoslať tlačidlo */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#8ca4c0] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#6b7c93] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Odosielam..." : "Odoslať správu"}
      </button>
    </form>
  );
} 