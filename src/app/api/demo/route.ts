import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

const demoSchema = z.object({
  full_name: z.string().trim().min(2, "Full name is required").max(120),
  business_name: z.string().trim().min(2, "Business name is required").max(160),
  city: z.string().trim().max(100).optional().default(""),
  contact_number: z.string().trim().min(7, "Valid phone/Viber number is required").max(40),
  email: z.string().trim().email("Valid email required").optional().or(z.literal("")),
  branch_count: z.coerce.number().int().min(1).max(500).default(1),
  preferred_date: z.string().trim().max(60).optional().default(""),
  notes: z.string().trim().max(600).optional().default(""),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = demoSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message || "Invalid input",
        },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("demo_requests").insert({
      ...parsed.data,
      status: "new",
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: "Could not save demo request: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Demo request received. We will contact you shortly.",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err instanceof Error ? err.message : "Unexpected error",
      },
      { status: 500 }
    );
  }
}

