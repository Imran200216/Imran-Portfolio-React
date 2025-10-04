import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionTemplate,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { UnstopIcon } from "@/components/icons/unstop";
import { LeetcodeIcon } from "@/components/icons/leetcode";
import { CodeforcesIcon } from "@/components/icons/codeforces";
import { CodechefIcon } from "@/components/icons/codechef";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { HuggingFaceIcon } from "@/components/icons/huggingface";
import { GithubIcon } from "@/components/icons/github";
import { IndeedIcon } from "@/components/icons/indeed";
import { NaukriIcon } from "@/components/icons/naukri";
import { AdkIcon } from "@/components/icons/adk";
import { PostmanIcon } from "@/components/icons/postman";
import { GoogleIcon } from "@/components/icons/google";
import { NodeIcon } from "@/components/icons/node";
import { FlaskIcon } from "@/components/icons/flask";
import { AiIcon } from "@/components/icons/ai";
import { DsaIcon } from "@/components/icons/dsa";
import { DesignThinkingIcon } from "@/components/icons/designthinking";
import { ProblemSolvingIcon } from "@/components/icons/problemsolving";
import { JavaIcon } from "@/components/icons/java";
import { CIcon } from "@/components/icons/c";
import { BackendIcon } from "@/components/icons/backend";
import { ApiIcon } from "@/components/icons/api";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Flutter",
      color: "blue-500",
      skills: [
        "Clean Architecture",
        "MVVM Architecture (Feature Based)",
        "Provider, Bloc & Cubit, GetX (State Management)",
        "GetIt (Dependency Injection)",
        "GoRouter (Navigation)",
        "Hive, Sqlite, Shared Preference (Local Storage)",
        "Firebase Integration (Auth, Firestore, Real Time Database, Notifications)",
        "Google Maps Integration (Geo-Fencing, Directions API)",
        "Google ML Kit / Entity Extraction",
        "Dart Packages & Pub.dev Libraries",
        "Responsive UI & Adaptive Layouts",
        "Razorpay Integration (Payments)",
        "Animated & Interactive UI (Flutter Widgets, Animations)",
      ],
    },

    {
      title: "Backend Development",
      color: "green-500",
      skills: [
        "REST Api",
        "Graphql",
        "Database Design",
        "Postman",
        "Apollo Server",
      ],
    },
    {
      title: "Cloud & Tools",
      color: "yellow-500",
      skills: [
        "Google Cloud/Vertex AI",
        "Firebase",
        "Git & Version Control",
        "Docker",
      ],
    },

    {
      title: "Deployment",
      color: "yellow-500",
      skills: [
        "Google Play Console",
        "AppStore Connect",
        "TestFlight",
        "Shorebird",
      ],
    },
  ];

  // Structured tool categories
  const toolCategories = [
    {
      name: "Machine Learning Frameworks",
      tools: [
        { name: "PyTorch", url: "https://pytorch.org/" },
        { name: "TensorFlow", url: "https://www.tensorflow.org/" },
        { name: "Keras", url: "https://keras.io/" },
        { name: "Scikit-learn", url: "https://scikit-learn.org/" },
        { name: "XGBoost", url: "https://xgboost.readthedocs.io/" },
        { name: "LightGBM", url: "https://lightgbm.readthedocs.io/" },
      ],
    },
    {
      name: "Deep Learning & NLP",
      tools: [
        {
          name: "Hugging Face Transformers",
          url: "https://huggingface.co/transformers",
        },
        { name: "BERT", url: "https://huggingface.co/bert-base-uncased" },
        { name: "spaCy", url: "https://spacy.io/" },
        { name: "Gensim", url: "https://radimrehurek.com/gensim/" },
        { name: "AllenNLP", url: "https://allenai.org/allennlp" },
        { name: "NLP.js", url: "https://github.com/axa-group/nlp.js" },
      ],
    },
    {
      name: "LLMs & AI Tools",
      tools: [
        { name: "LangChain", url: "https://www.langchain.com/" },
        { name: "LangGraph", url: "https://langchain-ai.github.io/langgraph/" },
        { name: "LLamaIndex", url: "https://www.llamaindex.ai/" },
        { name: "Crew AI", url: "https://www.crewai.com/" },
        { name: "GPT (1–4)", url: "https://openai.com/gpt-4" },
        { name: "Anthropic Claude", url: "https://www.anthropic.com/claude" },
        { name: "Mistral", url: "https://mistral.ai/" },
        { name: "Ollama", url: "https://ollama.ai/" },
        { name: "Google ADK", url: "https://google.github.io/adk-docs/" },
      ],
    },
    {
      name: "Data Processing & Analytics",
      tools: [
        { name: "Pandas", url: "https://pandas.pydata.org/" },
        { name: "NumPy", url: "https://numpy.org/" },

        { name: "Optuna", url: "https://optuna.org/" },
      ],
    },
    {
      name: "MLOps & Experimentation",
      tools: [
        { name: "MLflow", url: "https://mlflow.org/" },
        { name: "Weights & Biases (WandB)", url: "https://wandb.ai/" },
        { name: "ZenML", url: "https://zenml.io/" },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      tools: [
        { name: "Google Vertex AI", url: "https://cloud.google.com/vertex-ai" },
        { name: "SkyPilot", url: "https://skypilot.co/" },
      ],
    },
    {
      name: "Computer Vision",
      tools: [
        { name: "OpenCV", url: "https://opencv.org/" },
        {
          name: "Ultralytics YOLOv8",
          url: "https://github.com/ultralytics/ultralytics",
        },
        { name: "Roboflow", url: "https://roboflow.com/" },
        { name: "Label Studio", url: "https://labelstud.io/" },
        { name: "SuperAnnotate", url: "https://www.superannotate.com/" },
        { name: "IceVision", url: "https://airctic.com/0.7.0/" },
      ],
    },
    {
      name: "Deployment & Serving",
      tools: [
        { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
        { name: "Flask", url: "https://flask.palletsprojects.com/" },
        { name: "Streamlit", url: "https://streamlit.io/" },
        { name: "Bentoml", url: "https://www.bentoml.com/" },
        { name: "Cortex", url: "https://www.cortex.dev/" },
      ],
    },
    {
      name: "Vector Databases & Search",
      tools: [
        { name: "Pinecone", url: "https://www.pinecone.io/" },
        { name: "Qdrant", url: "https://qdrant.tech/" },
        { name: "VecDB", url: "https://vectordb.com/" },
        { name: "ElasticSearch", url: "https://www.elastic.co/" },
        { name: "Neo4j", url: "https://neo4j.com/" },
      ],
    },
    {
      name: "AI/ML Libraries",
      tools: [
        {
          name: "Transformers.js",
          url: "https://huggingface.co/docs/transformers.js",
        },
        {
          name: "Timm",
          url: "https://github.com/huggingface/pytorch-image-models",
        },
        {
          name: "Xformers",
          url: "https://github.com/facebookresearch/xformers",
        },
        { name: "DeepSpeed", url: "https://www.deepspeed.ai/" },
        { name: "ONNX", url: "https://onnx.ai/" },
        {
          name: "Intel OpenVINO",
          url: "https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html",
        },
      ],
    },
    {
      name: "Development Tools",
      tools: [
        { name: "Jupyter Notebooks/Lab", url: "https://jupyter.org/" },
        { name: "Git & Version Control", url: "https://git-scm.com/" },
        { name: "Docker", url: "https://www.docker.com/" },
        { name: "Hydra", url: "https://hydra.cc/" },
        { name: "PromptLayer", url: "https://promptlayer.com/" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const toolVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 bg-muted/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          What Imran Knows !
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-card/60 border border-border shadow-xl hover:scale-[1.03] transition-transform duration-300 h-full">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle
                    className={`text-sm sm:text-base text-${category.color}`}
                  >
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/60 border border-border shadow-xl p-4 sm:p-6 lg:p-8">
            <CardHeader className="text-center pb-6 sm:pb-8">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Why Mohammed Aashiq ?</span>
              </div>
              <CardTitle className="text-2xl sm:text-3xl mb-2">
                Tools & Technologies I Use
              </CardTitle>
              <p className="text-sm sm:text-base text-muted-foreground">
                Click on any tool to explore its official documentation
              </p>
            </CardHeader>
            <CardContent>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {toolCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    variants={cardVariants}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3 border-b border-primary/20 pb-2">
                        {category.name}
                      </h3>
                      <div className="space-y-1 sm:space-y-2">
                        {category.tools.map((tool, toolIndex) => (
                          <motion.a
                            key={tool.name}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={toolVariants}
                            whileHover="hover"
                            className="block px-2 sm:px-3 py-1.5 sm:py-2 bg-muted/30 hover:bg-primary/10 text-xs sm:text-sm text-center rounded-lg cursor-pointer transition-all duration-200 hover:text-primary border border-transparent hover:border-primary/20 hover:shadow-md"
                            title={tool.name}
                          >
                            {tool.name}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
      {/* Horizontal marquee for platforms and skills */}
      <div className="mt-10">
        <MarqueeSlider />
      </div>
    </section>
  );
};

// --- MarqueeSlider component ---
const sliderItems = [
  { label: "LeetCode", icon: LeetcodeIcon, href: "https://leetcode.com/" },
  {
    label: "Codeforces",
    icon: CodeforcesIcon,
    href: "https://codeforces.com/",
  },
  { label: "CodeChef", icon: CodechefIcon, href: "https://www.codechef.com/" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com/" },
  {
    label: "HuggingFace",
    icon: HuggingFaceIcon,
    href: "https://huggingface.co/",
  },
  { label: "GitHub", icon: GithubIcon, href: "https://github.com/" },
  { label: "Indeed", icon: IndeedIcon, href: "https://www.indeed.com/" },
  { label: "Naukri", icon: NaukriIcon, href: "https://www.naukri.com/" },
  { label: "Data Structures", icon: DsaIcon },
  { label: "Design Thinking", icon: DesignThinkingIcon },
  { label: "Problem Solving", icon: ProblemSolvingIcon },
  { label: "Java", icon: JavaIcon },
  { label: "Node.js", icon: NodeIcon },
  { label: "API", icon: ApiIcon },
  { label: "Postman", icon: PostmanIcon },
  { label: "Google", icon: GoogleIcon },
  // { label: "Flutter", href: "https://flutter.dev/" },
  // { label: "BLoC", href: "https://bloclibrary.dev/" },
  // { label: "Provider", href: "https://pub.dev/packages/provider" },
  // { label: "Shorebird", href: "https://shorebird.dev/" },
  // { label: "Firebase", href: "https://firebase.google.com/" },
  // { label: "GoRouter", href: "https://pub.dev/packages/go_router" },
  // {
  //   label: "Clean Architecture",
  //   href: "https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html",
  // },
];

function MarqueeSlider() {
  // Split items for two lines
  const half = Math.ceil(sliderItems.length / 2);
  const line1 = [...sliderItems.slice(0, half), ...sliderItems.slice(0, half)];
  const line2 = [...sliderItems.slice(half), ...sliderItems.slice(half)];
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Update container size on mount
  React.useEffect(() => {
    if (marqueeRef.current) {
      setContainerWidth(marqueeRef.current.offsetWidth);
      setContainerHeight(marqueeRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (marqueeRef.current) {
        setContainerWidth(marqueeRef.current.offsetWidth);
        setContainerHeight(marqueeRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse move handler
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!marqueeRef.current) return;
    const rect = marqueeRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  }
  function handleMouseLeave() {
    animate(mouseX, containerWidth / 2, {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
    animate(mouseY, containerHeight / 2, {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
  }

  // Helper to get scatter transform for each icon
  function getScatterStyle(idx: number, total: number, line: 1 | 2) {
    // Icon center position
    const iconsPerLine = total;
    const safeWidth = containerWidth || 1;
    const safeHeight = containerHeight || 1;
    const iconSpacing = safeWidth / iconsPerLine;
    const iconX = iconSpacing * (idx + 0.5);
    const iconY = line === 1 ? safeHeight * 0.3 : safeHeight * 0.7;
    // All math in one useTransform
    const maxScatter = 48;
    const style = useTransform([mouseX, mouseY], ([mx, my]) => {
      const dx = (typeof mx === "number" ? mx : 0) - iconX;
      const dy = (typeof my === "number" ? my : 0) - iconY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const scatter = Math.max(0, maxScatter - dist * 0.5);
      const angle = Math.atan2(dy, dx);
      const x = -Math.cos(angle) * scatter;
      const y = -Math.sin(angle) * scatter;
      return `translateX(${x}px) translateY(${y}px)`;
    });
    return { style };
  }

  return (
    <div
      ref={marqueeRef}
      className="relative w-full select-none"
      style={{ height: 160 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Line 1: scrolls left */}
      <motion.div
        className="flex gap-4 sm:gap-6 px-2 py-4 min-w-max animate-marquee pointer-events-none"
        style={{
          animation: "marquee 32s linear infinite",
        }}
      >
        {line1.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label + "1-" + i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center min-w-[64px] pointer-events-auto"
              tabIndex={-1}
              aria-hidden="true"
              style={{ transform: getScatterStyle(i, line1.length, 1).style }}
              whileHover={{ scale: 1.12 }}
            >
              <Icon width={32} height={32} className="mb-1" />
              <span className="text-xs text-muted-foreground">
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </motion.div>
      {/* Line 2: scrolls right */}
      <motion.div
        className="flex gap-4 sm:gap-6 px-2 py-4 min-w-max animate-marquee-reverse pointer-events-none"
        style={{
          animation: "marquee-reverse 36s linear infinite",
          marginTop: "-8px",
        }}
      >
        {line2.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label + "2-" + i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center min-w-[64px] pointer-events-auto"
              tabIndex={-1}
              aria-hidden="true"
              style={{ transform: getScatterStyle(i, line2.length, 2).style }}
              whileHover={{ scale: 1.12 }}
            >
              <Icon width={32} height={32} className="mb-1" />
              <span className="text-xs text-muted-foreground">
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </motion.div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
