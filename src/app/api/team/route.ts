import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import TeamMember from "@/models/TeamMember";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const teamMembers = await TeamMember.find({ active: true })
      .sort({ order: 1, name: 1 })
      .lean();
    
    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error('Error fetching team members:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 