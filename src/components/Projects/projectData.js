import v from "../../assets/v.png";
import iii from "../../assets/iii.png";
import vi from "../../assets/vi.png";
import iv from "../../assets/iv.png";
import vii from "../../assets/vii.png";
import viii from "../../assets/viii.png";
import i from "../../assets/i.png";
import ii from "../../assets/ii.png";
import ix from "../../assets/ix.png";

const projects = [
  {
    id: 1,
    title: "NexHire AI",
   category: ["FullStack", "AI"],

    description:
      "AI-powered interview coach platform that conducts voice interviews, generates resume-based questions, evaluates performance, and provides personalized recommendations for improvement.",

    image: v,

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GenAI",
      "SppechAI",
    ],

    github: "https://github.com/khushi123438/NexHire-AI",
    
  },

  {
    id: 2,
    title: "NyaySetu",
    category: ["Full Stack", "AI"],

    description:
      "AI-powered legal assistance platform that helps users understand legal information, access resources, and connect with legal support.",

    image: vi,

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "LLMs",
    ],

    github: "https://github.com/khushi123438/NyaySetu",
   
  },

 {
  id: 3,
  title: "RakshakAI",
  category: ["AI"],

  description:
    "Multimodal AI-based disaster intelligence system that analyzes satellite imagery, environmental data, and emergency reports to predict disaster risks, provide real-time situational awareness, and support intelligent response decisions.",

  image: vii,

  tech: [
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "GenAI",
  ],

  github: "https://github.com/khushi123438/NyaySetu/Rakshak-AI",
},

  {
    id: 4,
    title: "GreenBill 2.0",
category: ["Full Stack"],
    description:
      "Smart electricity bill prediction platform that estimates upcoming bills, tracks previous electricity usage, provides energy-saving insights, and suggests personalized tips to reduce consumption and costs.",

    image: viii,

    tech: [
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],

    github: "https://github.com/khushi123438/GreenBill2.0",
   
  },

  {
    id: 5,
    title: "PlacementPro AI",
    category: ["Machine Learning"],

    description:
      "ML-based placement prediction system that analyzes student academic and skill-related data to estimate placement chances. The model uses machine learning algorithms to identify patterns and provides placement probability along with key contributing factors.",

    image: iii,

    tech: [
      "Python",
      "Scikit-Learn",
      "JavaScript",
    ],

    github: "https://github.com/khushi123438/PlacementPro_AI",
   
  },

  {
    id: 6,
    title: "Smart Price Tracker Analyzer",
  category: ["Exploratory Data Analysis"],
    description:
      "End-to-end price monitoring platform that collects product data using web scraping, analyzes price trends, compares products, and provides insights through interactive dashboards.",

    image: iv,

    tech: [
      "Python",
      "Pandas",
      "BeautifulSoup",
      "Matplotlib",
      "JavaScript",
      "Chart.js",
    ],

    github: "https://github.com/khushi123438/Price-Tracker-Analyzer",
   
  },

  {
  id: 7,
  title: "AI Image Classifier",
  category: ["Deep Learning", "Computer Vision"],

  description:
    "Deep learning-based image classification system that identifies and classifies images using Convolutional Neural Networks (CNN). The application allows users to upload images, predicts the image category, and displays confidence scores through an interactive web interface.",

  image: i, 
  tech: [
    "Python",
    "TensorFlow",
    "Keras",
    "CNN",
    "Flask",
  ],

  github: "https://github.com/khushi123438/AI-Image-Classifier",
},

{
  id: 8,
  title: "Handwritten Digit Classifier",
  category: ["Deep Learning", "CNN", "RNN"],

  description:
    "Deep learning application for handwritten digit recognition using the MNIST dataset. Implemented CNN and RNN models to classify handwritten digits with high accuracy and compared their performance for image recognition tasks.",

  image: ii, 

  tech: [
    "Python",
    "TensorFlow",
    "Keras",
    "CNN",
    "RNN",
    "NumPy",
  ],

  github: "https://github.com/khushi123438/Handwritten-Digit-Classifier",
},

{
  id: 9,
  title: "Sentiment AI",
  category: ["AI", "Machine Learning", "NLP"],

  description:
    "AI-powered sentiment analysis system that analyzes user text, identifies emotional sentiment, and classifies feedback into positive, negative, or neutral categories using natural language processing and machine learning techniques.",

  image: ix,

  tech: [
    "Python",
    "Scikit-Learn",
    "NLP",
    "Pandas",
    "NumPy",
  ],

  github: "https://github.com/khushi123438/Sentiment-AI",
},
];

export default projects;