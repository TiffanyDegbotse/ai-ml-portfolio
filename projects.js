// Updated portfolio projects
const PROJECTS = [
  {
    title: "Consilience: Real-time ASR + RAG for Interdisciplinary Meetings",
    category: "NLP",
    img: "assets/consilience.png.png", // make sure this file exists
    blurb: "A voice-based, conversational LLM assistant that transcribes multi-speaker conversations, performs RAG retrieval, and functions as a research translator. In collaboration with Duke Deep Tech and OpenAI.",
    tags: ["LLMs", "RAG", "Speech-to-Text"],
    badges: ["Ontology aligned"],
    links: {
      repo: "#", 
      partnership: "https://deeptech.duke.edu/news/deep-tech-duke-funds-four-ai-metascience-projects-through-openai-partnership/", 
      case: "#"  
    },
    details: `
      <p><strong>Overview:</strong> Designed to enhance interdisciplinary collaboration by combining Whisper-based ASR, diarization, and retrieval-augmented generation (RAG).</p>
      <p>Features real-time transcripts, speaker attribution, and actionable summaries.</p>
      <p><em>See screenshots below or visit the live site.</em></p>
    `
  },
  {
    title: "Video-to-Video Style Transfer with RAFT-guided Consistency",
    category: "CV",
    img: "assets/award_image.png",
    blurb: "Best Individual Thesis Award-winning project on temporally consistent arbitrary video style transfer.",
    tags: ["Computer Vision", "Style Transfer"],
    badges: ["Award-winning", "Paper published"],
    links: {
      repo: "#", 
      demo: "https://link-to-your-award-page.com",  
      case: "https://link-to-your-paper.com"       
    },
    details: `
      <p><strong>Award:</strong> Best Individual Thesis Award</p>
      <p><strong>Overview:</strong> Implemented arbitrary video-to-video style transfer with RAFT optical flow guidance for temporal consistency.</p>
      <p>Includes denoising, stabilization, and evaluation via SSIM and temporal error metrics.</p>
    `
  },
  {
    title: "Twi Speech-to-Text Fine-Tuning",
    category: "NLP",
    img: "assets/twi.png",
    blurb: "Fine-tuned wav2vec2.0 for Twi, achieving strong performance on a low-resource Ghanaian dialect.",
    tags: ["Speech Recognition", "Low-resource NLP"],
    links: {
      repo: "https://github.com/TiffanyDegbotse/Twi-transcription", 
    },
    details: `
      <p><strong>Overview:</strong> Curated and cleaned Twi audio dataset, applied fine-tuning on wav2vec2.0, and improved robustness with SpecAugment.</p>
      <p><strong>Result:</strong> Achieved Word Error Rate (WER) of 16.8% across multiple dialects.</p>
      <p><em>Code and details available on GitHub.</em></p>
    `
  }
];

// Writing & talks
const WRITING = [
  {
    title: "From Prototype to Production: An LLM RAG Playbook",
    url: "#",
    venue: "Blog post"
  },
  {
    title: "Measuring Temporal Consistency in Video Style Transfer",
    url: "https://link-to-your-paper.com",
    venue: "Research paper"
  },
  {
    title: "Designing Latency Budgets for Real-time Speech Systems",
    url: "#",
    venue: "Talk"
  }
];

