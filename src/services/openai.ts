import toast from 'react-hot-toast';

const MOCK_DELAY = 1000; // Simulate API delay

// Check for required environment variables
// Removed environment variable checks since we're using mock data

export async function createThread(): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  return 'mock-thread-' + Date.now();
}

export async function sendMessage(threadId: string, content: string): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  return `This is a mock response to: "${content}". Real OpenAI integration is currently disabled.`;
}