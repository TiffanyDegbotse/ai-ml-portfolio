// Updated portfolio projects
const PROJECTS = [
  {
    title: "Consilience: Real-time ASR + RAG for Interdisciplinary Meetings",
    category: "NLP",
    img: "assets/consilience.png.png", // replace with screenshot of your site
    blurb: "A voice-based, conversational LLM assistant that transcribes multi-speaker conversations, performs RAG retrieval, and functions as a research translator to surface action items live in interdisciplinary collaborations. Funded by Duke Deep Tech and OpenAI."
    tags: ["LLMs", "RAG", "Speech-to-Text"],
    badges: ["Live demo", "Ontology aligned"],
    links: {
      repo: "#", // optional
      demo: "https://your-consilience-site-link.com", // replace with actual site link
      case: "#"  // optional case study
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
    img: "assets/award_image.jpg", // replace with your award certificate image
    blurb: "Best Individual Thesis Award-winning project on temporally consistent arbitrary video style transfer.",
    tags: ["Computer Vision", "Style Transfer"],
    badges: ["Award-winning", "Paper published"],
    links: {
      repo: "#", // optional
      demo: "https://link-to-your-award-page.com",  // link to award announcement
      case: "https://link-to-your-paper.com"       // link to the paper
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
    img: "assets/twi_project.jpg", // replace with a relevant image (dataset screenshot, waveform, etc.)
    blurb: "Fine-tuned wav2vec2.0 for Twi, achieving strong performance on a low-resource Ghanaian dialect.",
    tags: ["Speech Recognition", "Low-resource NLP"],
    badges: ["WER 16.8%", "20h speech data"],
    links: {
      repo: "https://github.com/your-username/twi-speech-to-text", // replace with actual GitHub link
      demo: "#",
      case: "#"
    },
    details: `
      <p><strong>Overview:</strong> Curated and cleaned Twi audio dataset, applied fine-tuning on wav2vec2.0, and improved robustness with SpecAugment.</p>
      <p><strong>Result:</strong> Achieved Word Error Rate (WER) of 16.8% across multiple dialects.</p>
      <p><em>Code and details available on GitHub.</em></p>
    `
  }
];

// Writing & talks (you can edit as needed)
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
