export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  description: string;
  details: string[];
  technologies: string[];
  metrics?: string[];
  github?: string;
  demo?: string;
  position: { x: number; y: number };
  size?: "small" | "medium" | "large";
};

export const projects: Project[] = [
  { id: "Soft Robot",
    title: "Crawling Soft Robot",
    shortTitle: "Soft Robot",
    category: "Materials and Design",
    year: "2023",
    description:
      "A soft robotic arm designed to crawl and move in a specific pattern. (Design Lab, IIT Ropar)",
    details: [
      "Developed a crawling soft robot by utilizing pneumatic systems and shape-changing materials",
      "Simulated the robot's movement and crawling behavior using a 3D printer and computer-aided design software",
      "Employed Solidworks software for CAD modeling and successfully 3D-printed the moulds of soft robot."
    ],
    technologies: ["Solidworks", "3D Printing", "Computer-Aided Design"],
    position: { x: 5, y: 23 },
    size: "large"

  },

  {
    id: "Attendance-system",
    title: "Attendance System using Face Recognition with Real time Database",
    shortTitle: "Attendance System",
    category: "Computer Vision",
    year: "2023",
    description:
      "An automated attendance solution designed to streamline check-ins and eliminate proxy marking by instantly recognizing faces and logging attendance records directly to a real-time cloud database.",
    details: [
      "Developed an attendance system utilizing face recognition technology integrated with Google Firebase’s real-time database to store and retrieve attendance records.",
      "Effectively employed the HOG(Histogram of Oriented Gradients) method to accurately detect and recognize faces for efficient attendance tracking."
    ],
    technologies: ["Python", "Neural Networks", "Machine Learning", "Computer Vision"],
    metrics: ["Increased efficiency in attendance tracking", "Reduced energy consumption"],
    position: { x: 32, y: 8 },
    size: "large"
  },
  {
    id: "deeponet",
    title: "DeepONet",
    shortTitle: "DeepONet",
    category: "Scientific AI",
    year: "2023",
    description:
      "Deep learning architecture for learning operators from limited data using branch and trunk networks. (Intern Under Prof. Dr. Manish Agarwal, IIT Ropar)",
    details: [
      "Implemented a DeepONet architecture based on operator learning.",
      "Leveraged the universal approximation theorem of neural networks to accurately and efficiently learn operators from limited data",
      "Used separate branch and trunk networks to encode input functions and output locations.",
      "Explored generalization compared with fully connected neural networks."
    ],
    technologies: ["Python", "Deep Learning", "Neural Networks", "Scientific AI"],
    position: { x: 60, y: 8 },
    size: "large"
  },
  {
    id: "querybot",
    title: "Query-Bot",
    shortTitle: "QueryBot",
    category: "NLP",
    year: "2023",
    description:
      "An intelligent NLP-powered chatbot designed to automate user support and resolve queries by accurately classifying intents and delivering relevant responses in real time.",
    details: [
      "Developed a chatbot using Natural language toolkit and Keras, employing natural language processing techniques for intelligent user interactions",
      "Trained the chatbot on a dataset that includes categories (intents), patterns, and responses. Utilized Keras to implement a deep learning model, enabling the generation of contextually relevant predefined responses."
    ],
    technologies: ["Python", "NLKT", "Keras", "JSON"],
    metrics: [ "Increased efficiency in user support", "Reduced operational costs"
    ],
    position: { x: 85, y: 23 },
    size: "large"
  },
  {
    id: "Game-win-prediction",
    title: "PUBG Game Win Prediction",
    shortTitle: "Game Win Prediction",
    category: "Machine Learning",
    year: "2023",
    description:
      "A machine learning model designed to predict the outcome of a game based on historical data.",
    details: [
      "Developed a predictive model for assessing winning chances in the popular online game PUBG",
      "Utilized a combination of machine learning algorithms, including CatBoost, Grid Search, and Keras, to train the model",
      "Evaluated the model's performance using metrics such as accuracy, precision, and recall."
    ],
    technologies: ["Python", "CatBoost","Grid Search", "Keras", "Scikit-learn"],
    metrics: ["RMSE: 0.09", "R2 Score: 0.91"],
    position: { x: 60, y: 43 },
    size: "large"
  },

  { id: "Repellent System",
    title: "Acoustic Animal Repellent System Using Animal Detection",
    shortTitle: "Repellent System",
    category: "Computer Vision",
    year: "2024",
    description:
      "A computer vision system designed to detect and track moving objects in real-time.",
    details: [
      "The project aimed to detect and deter intruding animals effectively via integrating cutting-edge technology to address wildlife intrusion challenges in agriculture",
      "Leveraged IR night vision cameras, computer vision algorithms, and ultrasonic alarm systems to detect and track moving objects in real-time.",
      "Through strategic deployment of IR cameras and implementation of the Yolov8n model for animal detection, precise monitoring and deterrence capabilities will be ensured, providing a cost-effective and environmentally friendly solution to safeguard crops and promote food security."
      ],
    technologies: ["Python", "OpenCV", "YOLOv8n", "Ultrasonic Alarm System", "IR Camera"],
    metrics: ["Detection rate: 95%", "False alarm rate: 0.1%"],
    position: { x: 32, y: 43 },
    size: "large"

  },

  {
    id: "jira-ai",
    title: "AI-Powered Jira Ticket Automation",
    shortTitle: "Jira AI",
    category: "Generative AI",
    year: "2025–2026",
    description:
      "Automated transformation of unstructured email conversations into structured information for Jira ticket creation. (ZS Associates, Pune)",
    details: [
      "Used Generative AI to understand unstructured email conversations.",
      "Generated structured fields required for Jira ticket creation.",
      "Designed the workflow to reduce repetitive manual ticket creation.",
      "Evaluated structured output against historical manually created records."
    ],
    technologies: ["Python", "Generative AI", "NLP", "SQL", "Jira"],
    position: { x: 5, y: 58 },
    size: "large"
  },
  {
    id: "analytics-pipelines",
    title: "Analytics & ETL Automation",
    shortTitle: "Analytics Automation",
    category: "Data Engineering",
    year: "2025–2026",
    description:
      "Automated analytics pipelines and ETL workflows to reduce reporting turnaround time. (ZS Associates, Pune)",
    details: [
      "Built automated analytics pipelines using SQL and Python.",
      "Transformed multi-source datasets into structured formats.",
      "Improved data quality and processing consistency.",
      "Developed reusable workflows for analytics teams."
    ],
    technologies: ["Python", "SQL", "ETL", "Snowflake", "Spark", "Hive"],
    metrics: ["90% reduction in reporting turnaround time"],
    position: { x: 32, y: 73 },
    size: "large"
  },
  {
    id: "generalized-ml",
    title: "Generalized Machine Learning Framework",
    shortTitle: "Reusable ML",
    category: "Machine Learning",
    year: "2025–2026",
    description:
      "Reusable machine learning models designed for experimentation workflows across teams.",
    details: [
      "Developed generalized KNN and XGBoost models.",
      "Designed reusable workflows requiring minimal modifications across teams.",
      "Focused on scalable experimentation and model reuse."
    ],
    technologies: ["Python", "KNN", "XGBoost", "Machine Learning"],
    position: { x: 60, y: 73 },
    size: "large"
  },

  {
  id: "Health-AI",
  title: "HealthIQ-AI",
  shortTitle: "AI Health Intelligence Platform",
  category: "Generative AI",
  year: "2026-Ongoing",

  description:
    "An AI-powered health intelligence platform designed to organize health records, analyze medical test reports over time, identify meaningful patterns, and provide personalized insights and alerts to help users better understand their health data.",

  details: [
    "Developing an intelligent platform that enables users to securely store and manage their health records, medical reports, and diagnostic test results in a centralized system.",

    "Building an AI-driven pipeline to analyze historical health data and identify trends, changes, and recurring patterns across medical test results over time.",

    "Developing intelligent insights and alert mechanisms that can highlight significant changes in health parameters and help users track their long-term health patterns.",

    "Implementing an AI-powered conversational interface that allows users to interact with their health data and obtain contextual insights from their stored records.",

    "Developing the application using a modern full-stack architecture with a FastAPI backend, database integration, authentication, and an AI-powered frontend experience."
  ],

  technologies: [
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "MongoDB",
    "Generative AI",
    "LLMs",
    "RAG",
    "Docker"
  ],

  metrics: [
    "Centralized long-term health record management",
    "Automated identification of health-data patterns",
    "AI-powered contextual insights",
    "Reduced manual effort in tracking historical reports"
  ],

  position: { x: 85, y: 58 },
  size: "large"
  }
];