window.PORTFOLIO_PROJECTS = [
  {
    "id": "analyst",
    "title": "AI Data Analyst Agent",
    "category": "Generative AI",
    "number": "01",
    "summary": "Natural-language questions become SQL, analysis, charts, and database-grounded insights.",
    "tags": [
      "PostgreSQL",
      "Text-to-SQL",
      "RAG",
      "FastAPI"
    ],
    "problem": "Business questions often require several steps: interpreting a metric, finding the right tables, writing SQL, and explaining the results.",
    "approach": "A supervisor coordinates planning, SQL generation, retrieval, analysis, visualization, and response generation. Schema inspection and business definitions inform queries. Validated analytical SQL returns actual data to Pandas and the explanation layer.",
    "steps": [
      "Question & planning",
      "Schema + knowledge retrieval",
      "Validated SQL execution",
      "Analysis & visualization",
      "Grounded response"
    ],
    "result": "Designed to expose generated queries, retrieved context, execution time, and errors so the analysis can be inspected.",
    "status": "Project description supplied; Streamlit interface and Docker packaging are proposed extensions. Public code and evaluation results are not yet available.",
    "next": "Evaluate SQL correctness, answer accuracy, latency, retry behavior, and ambiguous metric handling."
  },
  {
    "id": "vision-rag",
    "title": "Vision-RAG",
    "category": "Generative AI",
    "number": "02",
    "summary": "Eye-disease image classification paired with retrieved knowledge and LLM explanations.",
    "tags": [
      "EfficientNet",
      "TensorFlow",
      "Embeddings",
      "LLMs"
    ],
    "problem": "An image classifier returns a category, but users also need understandable information and supporting references.",
    "approach": "EfficientNet transfer learning classifies fundus images into ten categories. The predicted category and confidence guide knowledge retrieval; an LLM uses that context to generate a structured explanation with sources.",
    "steps": [
      "Fundus image preprocessing",
      "EfficientNet classification",
      "Knowledge retrieval",
      "LLM explanation",
      "Prediction + references"
    ],
    "result": "Reported classifier accuracy: approximately 79.9%, compared with approximately 74.8% for the custom CNN. These are user-reported results; evaluation documentation is pending.",
    "status": "Classifier and RAG workflow described. FastAPI endpoints and Streamlit interface are planned; vector-store and LLM choices require documentation.",
    "next": "Document the evaluation split, per-class results, retrieval quality, and source attribution. Explanations provide disease information, not image-level causal attribution or a clinical diagnosis."
  },
  {
    "id": "vehicle",
    "title": "Hit-and-Run Vehicle Identification",
    "category": "Computer Vision",
    "number": "03",
    "summary": "A modular video pipeline for vehicle detection, target matching, plate detection, and OCR.",
    "tags": [
      "YOLOv8",
      "OpenCV",
      "EasyOCR",
      "Tesseract"
    ],
    "problem": "Reviewing long surveillance recordings manually makes finding useful vehicle and license plate information time-consuming.",
    "approach": "YOLO detects vehicle classes from video. Target matches are cropped and passed to a plate detector. EasyOCR and Tesseract read preprocessed plate images; heuristic post-processing produces candidate text.",
    "steps": [
      "Video & vehicle detection",
      "Target matching & cropping",
      "License plate detection",
      "Hybrid OCR",
      "Candidate plate output"
    ],
    "result": "Repository contains vehicle inference, plate detection, and OCR scripts, with annotated-video and crop output workflows. Code inspected; execution and model accuracy have not been independently validated.",
    "status": "Modular prototype. Full pipeline integration and additional vehicle attribute classification remain future work.",
    "next": "Evaluate OCR against labeled plates and improve recognition under blur, glare, and difficult angles. Heuristic character replacement can introduce errors.",
    "repo": "https://github.com/Vittalmani/hit-and-run-detection"
  },
  {
    "id": "accident",
    "title": "Optimized-YOLO",
    "category": "Computer Vision",
    "number": "04",
    "summary": "Video-based accident detection exploring the balance between accuracy, latency, and false alerts.",
    "tags": [
      "YOLO",
      "Python",
      "OpenCV",
      "Video Analysis"
    ],
    "problem": "Continuous manual traffic monitoring is difficult to sustain and can delay identification of potential accident events.",
    "approach": "Video frames are extracted and prepared for YOLO inference. Detections support event analysis across consecutive frames, with thresholds and processing frequency considered to balance speed and accuracy.",
    "steps": [
      "Surveillance footage",
      "Frame preprocessing",
      "YOLO detection",
      "Temporal event analysis",
      "Event metadata"
    ],
    "result": "Work covers dataset preparation, inference, and evaluation considerations. No verified FPS, latency, or final detection metric is published here.",
    "status": "Detection project described; backend notifications and alert integration require implementation evidence.",
    "next": "Validate accident events against labeled video, measure false alerts and missed events, and benchmark latency on specified hardware."
  }
];
