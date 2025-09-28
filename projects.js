// Edit this array to update your portfolio. Add real links and metrics.
const PROJECTS = [
  {
    title: "Consilience: Real-time ASR + RAG for Interdisciplinary Meetings",
    category: "NLP",
    img: "assets/placeholder_nlp.jpg",
    blurb: "Low-latency Whisper-based pipeline with speaker diarization and ontology-aligned retrieval to draft action items in real time.",
    tags: ["LLMs","RAG","Whisper","Diarization","FastAPI"],
    badges: ["-10s latency", "95% speaker attribution", "Prod demo"],
    links: {
      repo: "https://github.com/",
      demo: "#",
      case: "#"
    },
    details: `
      <p><strong>Problem:</strong> Live multi-speaker conversations lose context and tasks.</p>
      <p><strong>Solution:</strong> Streaming ASR + diarization, embedding search, and LLM summarization to surface context-aware notes and next steps.</p>
      <ul>
        <li>Stack: Whisper, Pyannote, FAISS, FastAPI, Postgres.</li>
        <li>Eval: WER, attribution accuracy, end-to-end latency.</li>
        <li>Ops: Dockerized services; tracing with OpenTelemetry.</li>
      </ul>
    `
  },
  {
    title: "Video-to-Video Style Transfer with RAFT-guided Consistency",
    category: "CV",
    img: "assets/placeholder_cv.jpg",
    blurb: "Temporal-consistent arbitrary style transfer using Magenta + RAFT optical flow; adds denoising and stabilization.",
    tags: ["Vision","Style Transfer","RAFT","TensorFlow"],
    badges: ["SSIM 0.91", "Temporal jitter ↓32%", "Demo app"],
    links: {
      repo: "https://github.com/",
      demo: "#",
      case: "#"
    },
    details: `
      <p><strong>Problem:</strong> Frame-by-frame style transfer creates flicker.</p>
      <p><strong>Solution:</strong> Flow-guided blending and stabilization to maintain content coherence.</p>
      <ul>
        <li>Stack: TF Hub (Magenta), RAFT, OpenCV, FFmpeg.</li>
        <li>Eval: SSIM, TWE; ablations on flow/no-flow.</li>
      </ul>
    `
  },
  {
    title: "Twi Speech-to-Text: Low-Resource Fine-tuning",
    category: "NLP",
    img: "assets/placeholder_asr.jpg",
    blurb: "Fine-tuned wav2vec 2.0 on curated Twi audio for robust transcription across accents and conditions.",
    tags: ["ASR","Low-resource","Audio","Wav2Vec2"],
    badges: ["WER 16.8%", "20h speech", "Augmentations"],
    links: {
      repo: "https://github.com/",
      demo: "#",
      case: "#"
    },
    details: `
      <p>Data cleaning, CTC fine-tuning, and noise robustness via SpecAugment. Benchmarked on community test sets; error analysis highlights tone diacritics.</p>
    `
  },
  {
    title: "Telco Churn: From Baseline to Interpretable XGBoost",
    category: "TimeSeries",
    img: "assets/placeholder_tabular.jpg",
    blurb: "End-to-end pipeline with rigorous preprocessing, model comparison, and SHAP-based stakeholder explanations.",
    tags: ["Tabular","XGBoost","SHAP","Pipelines"],
    badges: ["AUC 0.89", "Leakage-safe", "SHAP plots"],
    links: {
      repo: "https://github.com/",
      demo: "#",
      case: "#"
    },
    details: `
      <p>Feature store setup, cross-validation, calibration, and counterfactual what-ifs. Production checklist included.</p>
    `
  },
  {
    title: "MLOps Template: Train → Track → Serve",
    category: "MLOps",
    img: "assets/placeholder_mlops.jpg",
    blurb: "Cookiecutter-style repo with Hydra configs, MLflow tracking, and FastAPI serving with tests and CI.",
    tags: ["MLOps","Hydra","MLflow","FastAPI","Docker","CI"],
    badges: ["Reproducible", "GPU-ready", "GH Actions"],
    links: {
      repo: "https://github.com/",
      demo: "#",
      case: "#"
    },
    details: `
      <p>Includes datasets registry, experiment tracking, model registry, unit/integration tests, and deployment scripts.</p>
    `
  }
];

const WRITING = [
  {
    title: "From Prototype to Production: An LLM RAG Playbook",
    url: "#",
    venue: "Blog post"
  },
  { title: "Measuring Temporal Consistency in Video Style Transfer", url: "#", venue: "Short paper" },
  { title: "Designing Latency Budgets for Real-time Speech Systems", url: "#", venue: "Talk" }
];
