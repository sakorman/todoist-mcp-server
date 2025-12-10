import { Prompt } from "@modelcontextprotocol/sdk/types.js";

export interface PromptDefinition extends Prompt {
  messages: {
    role: "user" | "assistant";
    content: {
      type: "text";
      text: string;
    };
  }[];
}

export const PROMPTS: Record<string, PromptDefinition> = {
  "todoist_daily_briefing": {
    name: "todoist_daily_briefing",
    description: "Get a briefing of today's tasks and priorities",
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: "Please check my tasks for today (using filter 'today'), prioritize them, and give me a brief summary of what I need to focus on.",
        },
      },
    ],
  },
  "todoist_cleanup": {
    name: "todoist_cleanup",
    description: "Review overdue tasks and clean up the task list",
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: "Please check for any overdue tasks (using filter 'overdue'). If there are any, list them and ask me if I want to reschedule or complete them.",
        },
      },
    ],
  },
};

