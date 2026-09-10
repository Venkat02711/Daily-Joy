/**
 * Placeholder for future AI image generation integration.
 * Do NOT expose API keys in frontend code. In the future, this should
 * call a secure backend endpoint which then calls the actual AI provider.
 */

export interface GenerationRequest {
  prompt: string;
  theme: string;
  user?: string;
}

export interface GenerationResponse {
  imageUrl: string;
  success: boolean;
  error?: string;
}

export const generateImage = async (request: GenerationRequest): Promise<GenerationResponse> => {
  // Simulate network delay for frontend testing
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Throw an error to indicate it's not implemented in the free tier
  throw new Error("AI image generation is a premium feature coming soon.");
  
  // Future implementation will look like:
  /*
  try {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    return await response.json();
  } catch (error) {
    return { success: false, imageUrl: '', error: 'Generation failed' };
  }
  */
};
