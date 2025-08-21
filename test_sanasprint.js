// Test script to debug SanaSprint API
import { Client } from "@gradio/client";

async function testSanaSprint() {
  try {
    console.log('Connecting to SanaSprint...');
    const client = await Client.connect("vgrowhouse/SanaSprint");
    
    console.log('Getting API info...');
    const apiInfo = await client.view_api();
    console.log('API Structure:', JSON.stringify(apiInfo, null, 2));
    
    // Test with the correct "/infer" endpoint
    console.log('Testing prediction with /infer endpoint...');
    const result = await client.predict("/infer", {
      prompt: "automotive sports car",
      model_size: "1.6B",
      seed: 12345,
      randomize_seed: true,
      width: 1024,
      height: 1024,
      guidance_scale: 4.0,
      num_inference_steps: 20
    });
    
    console.log('Success! Result:', result);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testSanaSprint();