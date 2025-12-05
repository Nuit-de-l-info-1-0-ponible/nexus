import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Validate data (basic)
        if (!data.name || !data.email || !data.mission) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const dataDir = path.join(process.cwd(), "data");
        const filePath = path.join(dataDir, "submissions.json");

        // Ensure data directory exists
        try {
            await fs.access(dataDir);
        } catch {
            await fs.mkdir(dataDir, { recursive: true });
        }

        // Read existing data
        let submissions = [];
        try {
            const fileContent = await fs.readFile(filePath, "utf-8");
            submissions = JSON.parse(fileContent);
        } catch (error) {
            // File doesn't exist or is empty, start with empty array
        }

        // Add new submission with timestamp
        const newSubmission = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            ...data,
        };

        submissions.push(newSubmission);

        // Write back to file
        await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));

        return NextResponse.json({ success: true, id: newSubmission.id });
    } catch (error) {
        console.error("Error saving submission:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
