import ProjectCard from "@/app/projects/components/ProjectCard";

import type { Metadata } from "next";

const projects: {
  id: string;
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  image?: string;
  website?: string;
}[] = [
  {
    id: "Confidence_Estimation_of_a_Model_and_Explainable_AI",
    name: "Confidence Estimation of a Model and Explainable AI",
    description:
      "Utilized the CNN pre-trained model ResNet 50 for classifying tumors in the scanned medical image to identify breast cancer.To handle the imbalanced dataset, applied the Leave-One-Out cross-validation technique which increased accuracy by 60%",
    repo: "https://drive.google.com/file/d/1RpEKPL3CqE2ZC7B5V9rUiNk5S1eXZJEN/view",
    tags: ["Python", "Machine Learning", "Google Colab"]
  },
  {
    id: "order_management_system",
    name: "Order Management System",
    description:
      "Developed an order management system designed to streamline operations and increase efficiency. The platform allows users to manage customers, vendors, and products in one centralized location, making it easier to track orders and inventory levels of the products.",
    tags: ["react", "graphql", "express", "mongo", "typescript"]
  },
  {
    id: "esocr",
    name: "Exact Sciences OCR",
    description:
      "ESOCR was a COTS OCR solution designed to extract information from both handwritten and system-generated patient application forms and insert it into the system, in-order to reduce human error and time needed for manual data entry.",
    repo: "https://github.com/ashfaqnisar/ESOCR",
    tags: ["react", "express", "nanonets", "firebase"],
    website: "https://esocr.vercel.app/"
  },
  {
    id: "adani",
    name: "Adani Ports Invoice Reconciliation System",
    description:
      "APIRS is a system designed to streamline the invoicing and payment process for both customers and the Adani Ports billing team. Its goal is to ensure accurate and timely payments while reducing the time and effort required to manage invoices and payments.",
    repo: "https://www.linkedin.com/posts/adani-ports-%26-sez-ltd-_aatmanirbharbharat-innovation-adaniports-activity-6696773252469059584-CW8L?utm_source=share&utm_medium=member_desktop",
    tags: ["react", "firebase", "express", "razorpay"]
  },
  {
    id: "college_erp",
    name: "College ERP",
    description:
      "Designed and Implemented an ERP (Enterprise Resource Planning) system that maintains detailed information on over 1,000 students, faculty, and staff. The system includes an arrangement feature that facilitates scheduling and management of student examinations.",
    tags: ["react", "firestore", "firebase Functions", "express"]
  },
  {
    id: "kiosk",
    name: "KIOSK Wastage Recycler",
    description:
      "Developed a Java project to manage various types of wastage provided to the KIOSK, featuring a command-line user interface for user interaction. The system enables efficient handling and monitoring of different types of wastage through an intuitive interface.",
    repo: "https://github.com/vamshikrishnaginna/Swachh-Bharat-Assignment",
    tags: ["java", "maven"]
  },
  {
    id: "enimo",
    name: "Enimo",
    description:
      "Enimo is an energy information and monitoring system designed to help users monitor the energy consumption of their appliances. The system provides real-time updates on the energy consumed by each appliance and displays the data in easy-to-read charts.",
    repo: "https://github.com/vamshikrishnaginna/Enimo",
    tags: ["react", "IOT", "firebase", "Pub-Sub"]
  },
  {
    id: "mars_habitat",
    name: "Mars Habitat Environment",
    description:
      "Designed and built a game environment to simulate the colonization of Mars, providing users with an immersive experience. The game environment features a range of technical elements and challenges, enabling players to explore and learn about the challenges of colonizing the red planet.",
    repo: "https://www.youtube.com/watch?v=3up2qHrQdkc",
    tags: ["UnrealEngine", "C#"]
  }
];

export const metadata: Metadata = {
  title: "Vamshi Ginna - Projects",
  description: "Projects developed by Vamshi Ginna",
  openGraph: {
    title: "Vamshi Ginna - Projects",
    description: "Projects developed by Vamshi Ginna",
    url: "https://ashfaqnisar.com/projects"
  }
};

const Page = () => {
  return (
    <div className={"w-full px-4 pb-8 sm:pt-16"}>
      <div className={"md:container md:mx-auto"}>
        <h1
          className={
            "py-4 text-center text-lg font-bold tracking-tight duration-150 sm:text-left sm:text-xl md:text-2xl"
          }
        >
          Projects
        </h1>
        <div className={"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
