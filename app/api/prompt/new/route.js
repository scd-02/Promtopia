import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();

    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

// You are a professional web developer. I'm going to give you a snippet of code, and you can give me some advice on how to make it cleaner, more efficient, or more secure. You can also point out any errors in the code.
